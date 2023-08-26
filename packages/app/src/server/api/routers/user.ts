import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import HashPassword from "~/utils/hashPassword";
import { prisma } from "~/server/db";
import { type User } from "~/types/user";
import { TRPCError } from "@trpc/server";

export const userRouter = createTRPCRouter({
  register: publicProcedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        email: z.string().email(),
        password: z.string(),
        confirmPassword: z.string(),
        profileImageUrl: z.string(),
      })
    )
    .mutation(async ({ input }: { input: User }) => {
      input.password = await HashPassword(input.password);

      const { firstName, lastName, email, password, profileImageUrl } = input;

      try {
        const newUser = await prisma.user.create({
          data: {
            firstName,
            lastName,
            email,
            password,
            profileImageUrl,
          },
        });

        return {
          user: {
            ...newUser,
            password: undefined,
          },
        };
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Error Creating User!",
        });
      }
    }),
});
