import { createTRPCReact } from "@trpc/react-query";

export const tRPC = {
  apiUrl: "/api/trpc",
  createReactQueryHooks: createTRPCReact,
};
