import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { Main } from "~/components/layout/main";
import { type NextRouter, useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient: QueryClient = new QueryClient();

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router: NextRouter = useRouter();
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Main router={router}>
          <Component {...pageProps} key={router} />
        </Main>
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default api.withTRPC(MyApp);
