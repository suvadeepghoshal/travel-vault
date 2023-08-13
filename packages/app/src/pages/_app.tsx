import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { Main } from "~/components/layout/main";
import { NextRouter, useRouter } from "next/router";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router: NextRouter = useRouter();
  return (
    <SessionProvider session={session}>
      <Main router={router}>
        <Component {...pageProps} key={router} />
      </Main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
