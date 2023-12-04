"use client";

import { Box, Flex, Text, chakra } from "@chakra-ui/react";

export default function Resume() {
  return (
    <Flex align="center" direction="column" h="calc(100vh - 80px)" width="100%">
      <Text fontSize="3xl">My Resume</Text>
      <chakra.iframe
        height={"100%"}
        width="100%"
        src="./Matthew-McCracken-Resume.pdf"
      ></chakra.iframe>
    </Flex>
  );
}
