import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  white: "#FFFFFFEB",
};

export const customTheme = extendTheme({
  config,
  colors,
  styles: {
    global: {
      "html, body": {
        height: "100vh",
      },
      a: {
        _focus: {
          boxShadow: "none !important",
        },
      },
      button: {
        _focus: {
          boxShadow: "none !important",
        },
      },
    },
  },
  components: {
    CloseButton: {
      variants: {
        imageBox: {
          backgroundColor: "orange.300",
          _hover: {
            backgroundColor: "orange.500",
          },
        },
      },
    },
  },
  fonts: {
    heading: "Red Hat Display",
    body: "Roboto",
  },
});
