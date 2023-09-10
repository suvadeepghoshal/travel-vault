import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {type GetServerSidePropsContext} from "next";
import {type DefaultSession, getServerSession, type NextAuthOptions,} from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import GitHubProvider from "next-auth/providers/github";
import {env} from "~/env.mjs";
import {prisma} from "~/server/db";
import CredentialsProvider from "next-auth/providers/credentials";
import HashPassword from "~/utils/hashPassword";
import {undefined} from "zod";
import {type GitHubUser} from "~/types/gitHubUser";
import {type User} from "~/types/user";

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
      // ...other properties
      // role: UserRole;
    };
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

async function generatePassword() {
  return await HashPassword.encrypt(
    Math.random().toString(36).slice(2) +
      Math.random().toString(36).toUpperCase().slice(2)
  );
}

const randomHashedPassword: string = await generatePassword();

function mapGitHubUserToPrismaUser(user: GitHubUser): User {
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
      };
    },
    signIn: async ({ user, account }): Promise<string | boolean> => {
      if (account?.provider === "github") {
        try {
          const existingUser = await prisma.account.findUnique({
            where: {
              provider_providerAccountId: {
                providerAccountId: account.providerAccountId,
                provider: account?.provider,
              },
            },
          });

          if (existingUser) {
            return true;
          }

          const transformedUser: User = mapGitHubUserToPrismaUser(
            user as GitHubUser
          );

          const storedUser: User = await prisma.user.upsert({
            where: { email: user.email! },
            update: transformedUser,
            create: transformedUser,
          });

          if (storedUser) {
            await prisma.account.upsert({
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
                access_token: account.access_token,
                refresh_token: account.refresh_token,
                type: account.type,
                token_type: account.token_type,
                scope: account.scope,
                id_token: account.id_token,
                session_state: account.session_state,
              },
              create: {
                userId: storedUser.id!,
                provider: account?.provider,
                providerAccountId: account.providerAccountId,
                access_token: account.access_token,
                refresh_token: account.refresh_token,
                type: account.type,
                token_type: account.token_type,
                scope: account.scope,
                id_token: account.id_token,
                session_state: account.session_state,
              },
            });
            return true;
          }
        } catch (error) {
          console.error("Error during sign-in", error);
          return false;
        }
      }
      return true;
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
          label: "loginEmail",
          type: "text",
          placeholder: "your email",
        },
        password: { label: "loginPassword", type: "password" },
      },
      async authorize(credentials, _req) {
        if (credentials === undefined) {
          throw new Error("No credentials provided");
        }

        const email = credentials.username;
        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user?.password) {
          throw new Error("Invalid credentials");
        }

        const isValidPassword: boolean = await HashPassword.isValid(
          credentials.password,
          user.password
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
