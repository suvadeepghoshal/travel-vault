import { PrismaClient } from "@prisma/client";

declare const global: typeof globalThis & { prisma?: PrismaClient };

let prismaInstance: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prismaInstance = new PrismaClient({
    log: ["info"],
  });
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      log: ["query", "info", "warn", "error"],
    });
  }
  prismaInstance = global.prisma;
}

export default prismaInstance;
