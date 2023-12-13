"use client";

import { StyleFunctionProps, mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors: {
    grey: {
      100: "#e3e3e3",
      200: "#c4c4c4",
      800: "#616161",
    },
    negative: {
      200: "#E2E8F0",
      300: "#CBD5E0",
      500: "#2D3748",
      600: "#1A202C",
    },
    blue: {
      950: "#102036",
    },
    outline: {
      dark: "#EDF2F7",
      light: "#718096",
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("blue.50", "blue.950")(props),
      },
    }),
  },
  components: {
    Link: {
      variants: {
        inline: (props: StyleFunctionProps) => ({
          color: props.colorMode === "dark" ? "blue.300" : "teal.500",
        }),
      },
    },
  },
});
export default theme;
