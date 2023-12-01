"use client";

import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: true,
  colors: {
    grey: {
      100: "#e3e3e3",
      200: "#c4c4c4",
      800: "#616161",
    },
  },
});
export default theme;
