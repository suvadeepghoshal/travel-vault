import Head from "next/head";
import { NextRouter } from "next/router";
import React from "react";
import Navbar from "~/components/navbar/navbar";
import Footer from "~/components/footer/footer";

export function Main({
  children,
  router,
}: {
  children: React.ReactNode;
  router: NextRouter;
}): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Travel Vault | Suvadeep Ghoshal" />
        <meta name="author" content="Suvadeep Ghoshal" />
        <meta name="author" content="iamsg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Marhey:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Travel Vault" />
        <meta name="og:title" content="Travel Vault" />
        <meta property="og:type" content="website" />
        <title>Travel Vault | Suvadeep Ghoshal</title>
      </Head>
      <Navbar path={router.asPath} />
      <div>{children}</div>
      <Footer />
    </>
  );
}
