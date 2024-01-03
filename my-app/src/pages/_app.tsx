import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "src/theme";
import "../styles/globals.css";
import "../styles/landing.css";
import Head from "next/head";
import { NextPage, NextPageContext } from "next";
import { ReactElement, ReactNode } from "react";
export type NextPageWithLayout<P = unknown, IP = NextPageContext> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Ankit Patil</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Ankit Patil portfolio" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}
