import { HMSRoomProvider } from "@100mslive/hms-video-react";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Layout from "../components/Layout";
import { customTheme } from "../config/customTheme";
import { AuthProvider } from "@/hooks/useAuth";

import "../global.css";
function HuLanguages({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme} resetCSS>
      <AuthProvider>
        <Layout pageName={Component.displayName}>
          <HMSRoomProvider>
            <Component {...pageProps} theme={customTheme} />
          </HMSRoomProvider>
        </Layout>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default HuLanguages;
