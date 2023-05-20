import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";

import { Navbar } from "../components/navbar";
import { Metadata } from "../providers";
import { theme } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Metadata />
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  );
}
