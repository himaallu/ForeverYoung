import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { SpeechProvider } from "@speechly/react-client";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ForeverYoung</title>
        <meta
          name="description"
          content="Promoting growth and innovation by directing talented individuals towards their desired opportunities present on their campus itself! Ensuring that no potential remains untapped."
        />
      </Head>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <UserProvider>
            <SpeechProvider
              appId="ff2d00a9-30c9-49c8-b8a8-4e106cd1b6f9"
              debug={true}
              logSegments={true}
              vad={{ enabled: false }}
            >
              <Component {...pageProps} />
            </SpeechProvider>
          </UserProvider>
          <ToastContainer />
        </ChakraProvider>
      </Provider>
    </>
  );
}
