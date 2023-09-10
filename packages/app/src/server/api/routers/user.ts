import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
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
        confirmPassword: z.string().optional(),
        profileImageUrl: z.string(),
      })
    )
    .mutation(async ({ input }: { input: User }) => {
      if (
        input?.confirmPassword !== undefined &&
        input.password !== input?.confirmPassword
      ) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Password and Confirm Password do not match!",
        });
      }

      input.password = await HashPassword.encrypt(input.password);

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
            password: "*****",
          },
        };
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Error Creating User!",
        });
      }
    }),
  getUserByEmail: protectedProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
      })
    )
    .query(async ({ input }): Promise<User> => {
      const { email } = input;
      let user: User | null;
      try {
        user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "User is not found!",
          });
        }
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Error Finding User!",
        });
      }
      return user;
    }),
});
