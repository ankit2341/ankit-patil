import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "src/theme";
import "../styles/globals.css";
import "../styles/landing.css";
import Head from "next/head";
import { NextPage, NextPageContext } from "next";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

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
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // if (router.pathname === "/projects") {
    // Show the overlay when the route changes
    setIsVisible(true);

    // Hide the overlay after animation completes
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 1000); // Duration of your animation in milliseconds

    return () => clearTimeout(timeout);
    // }
  }, [router.pathname]);

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Ankit Patil</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Ankit Patil portfolio" />
      </Head>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      {isVisible ? (
        <motion.div
          initial={{ scaleX: 0, transformOrigin: "left" }}
          animate={{
            scaleX: [0, 1, 0],
            transformOrigin: ["left", "left", "right"], // Change transformOrigin for each keyframe
            transition: { duration: 1, ease: "linear" },
          }}
          style={{
            backgroundColor: "#9452ff",
            height: "100vh",
          }}
        ></motion.div>
      ) : (
        getLayout(<Component {...pageProps} />)
      )}
    </ChakraProvider>
  );
}
