import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {type GetServerSidePropsContext} from "next";
import {type Account, type DefaultSession, getServerSession, type NextAuthOptions,} from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import GitHubProvider from "next-auth/providers/github";
import {env} from "~/env.mjs";
import {prisma} from "~/server/db";
import CredentialsProvider from "next-auth/providers/credentials";
import HashPassword from "~/utils/hashPassword";
import {undefined} from "zod";
import {type GitHubUser} from "~/types/gitHubUser";
import {type User} from "~/types/user";
import {type DiscordUser} from "~/types/discordUser";
import jwt, {type Secret} from "jsonwebtoken";
import {v4 as uuidv4} from "uuid";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      id: string;
    };
  }
}

const generatePassword = async () =>
  await HashPassword.encrypt(
    Math.random().toString(36).slice(2) +
      Math.random().toString(36).toUpperCase().slice(2)
  );

const randomHashedPassword: string = await generatePassword();

const mapGitHubUserToPrismaUser = (user: GitHubUser): User => {
  const splitName: string[] = user.name.split(" ");
  const firstName: string =
    splitName.length > 1 ? splitName.slice(0, 1).join(" ") : "";
  const lastName: string =
    splitName.length > 1 ? splitName.slice(1).join(" ") : "";

  return {
    firstName: firstName,
    lastName: lastName,
    email: user?.email,
    profileImageUrl: user?.image,
    password: randomHashedPassword,
  };
};

async function getExistingUser(account: Account) {
  return prisma.account.findUnique({
    where: {
      provider_providerAccountId: {
        providerAccountId: account.providerAccountId,
        provider: account?.provider,
      },
    },
  });
}

function initializeUser() {
  return {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profileImageUrl: "",
  };
}

const mapDiscordUserToPrismaUser = (discordUser: DiscordUser): User => {
  const capitalizeFirstLetter = (name?: string): string => {
    if (!name) return "";
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };
  const parseUser: (data: DiscordUser) => {
    firstName: string;
    lastName: string;
  } = (
    data: DiscordUser
  ): {
    firstName: string;
    lastName: string;
  } => {
    let names: string[] = [];

    // First preference to global_name
    if (data.global_name) {
      names = data.global_name.split(" ");
    }

    // If global_name doesn't exist or is just a single name, use username
    if (names.length < 2 && data.username) {
      names = data.username.split(" ");
    }

    // If username also doesn't give full name, use name
    if (names.length < 2 && data.name) {
      names = data.name.split(" ");
    }

    // Capitalize and return parsed names
    return {
      firstName: capitalizeFirstLetter(names[0]) || "",
      lastName: names.slice(1).map(capitalizeFirstLetter).join(" ") || "",
    };
  };
  const {
    firstName,
    lastName,
  }: {
    firstName: string;
    lastName: string;
  } = parseUser(discordUser);
  return {
    firstName: firstName,
    lastName: lastName,
    email: discordUser?.email,
    profileImageUrl: discordUser?.image,
    password: randomHashedPassword,
  };
};

function getCustomAccessToken(user: User): string {
  if (!env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
  }

  return jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    env.JWT_SECRET as Secret,
    { expiresIn: "1h" }
  );
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => {
      return {
        ...session,
        user: {
          ...user,
          password: undefined,
        },
        maxAge: 5 * 60, // 5 minutes
        updateAge: 3 * 60, // If less than this duration has passed since the last session update, then the session will be updated in the background (default is 24 hours)
      };
    },
    signIn: async ({ user, account }): Promise<string | boolean> => {
      const upsertUser = async (transformedUser: User) =>
        prisma.user.upsert({
          where: { email: user.email! },
          update: transformedUser,
          create: transformedUser,
        });

      const upsertUserAccount = async (storedUser: User) => {
        account &&
          (await prisma.account.upsert({
            where: {
              provider_providerAccountId: {
                providerAccountId: account.providerAccountId,
                provider: account?.provider,
              },
            },
            update: {
              userId: storedUser.id,
              provider: account?.provider,
              providerAccountId: account.providerAccountId,
              access_token:
                account?.provider !== "credentials"
                  ? account.access_token
                  : getCustomAccessToken(storedUser),
              refresh_token: account.refresh_token,
              type: account.type,
              token_type: account.token_type,
              scope:
                account?.provider !== "credentials"
                  ? account.scope
                  : "credentials identify",
              id_token: account.id_token,
              session_state: account.session_state,
            },
            create: {
              userId: storedUser.id!,
              provider: account?.provider,
              providerAccountId: account.providerAccountId,
              access_token:
                account?.provider !== "credentials"
                  ? account.access_token
                  : getCustomAccessToken(storedUser),
              refresh_token: account.refresh_token,
              type: account.type,
              token_type: account.token_type,
              scope:
                account?.provider !== "credentials"
                  ? account.scope
                  : "credentials identify",
              id_token: account.id_token,
              session_state: account.session_state,
            },
          }));
      };

      const generateCustomSession = async (user: User, account: Account) => {
        account &&
          (await prisma.session.create({
            data: {
              sessionToken: uuidv4(),
              userId: user.id!,
              expires: new Date(Date.now() + 60 * 60 * 1000), // expires in one hour
            },
          }));
      };

      try {
        const existingUser = await getExistingUser(account!);

        if (existingUser) {
          return true;
        }

        let transformedUser: User = initializeUser();

        if (account?.provider === "github")
          transformedUser = mapGitHubUserToPrismaUser(user as GitHubUser);
        else if (account?.provider === "discord")
          transformedUser = mapDiscordUserToPrismaUser(user as DiscordUser);
        else if (account?.provider === "credentials")
          transformedUser = user as User;

        const storedUser: User = await upsertUser(transformedUser);

        if (storedUser) {
          await upsertUserAccount(storedUser);
          if (account?.provider === "credentials") {
            await generateCustomSession(storedUser, account);
          }
          return true;
        }

        return true;
      } catch (error) {
        console.error("Error during sign-in", error);
        return false;
      }
    },
  },
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "email",
          type: "text",
          placeholder: "your email",
        },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, _req) {
        if (!credentials) {
          throw new Error("No credentials provided");
        }

        const email = credentials?.username;
        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user?.password) {
          throw new Error("Invalid credentials");
        }

        const isValidPassword: boolean = await HashPassword.isValid(
          credentials?.password,
          user?.password
        );

        if (isValidPassword) {
          return user;
        } else {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
