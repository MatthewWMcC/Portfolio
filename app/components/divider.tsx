"use client";

import { Divider as ChakraDivider, useColorModeValue } from "@chakra-ui/react";

export default function Divider() {
  return (
    <>
      <br></br>
      <ChakraDivider
        borderColor={useColorModeValue("blackAlpha.200", "whiteAlpha.200")}
      />
      <br></br>
    </>
  );
}
