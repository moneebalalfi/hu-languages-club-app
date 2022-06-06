import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head lang="en">
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#1A202C" />
          <link rel="apple-touch-icon" href="/logos/hulc-logo.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
