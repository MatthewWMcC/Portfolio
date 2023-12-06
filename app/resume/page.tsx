"use client";

import { Box, Container, Flex, Text, chakra } from "@chakra-ui/react";

export default function Page() {
  return (
    <Container maxW="container.xl" h={"calc(100vh - 60px)"}>
      <Flex align="center" direction="column" width="100%" h={"100%"}>
        <chakra.iframe
          height={"100%"}
          width="100vw"
          src="./Matthew-McCracken-Resume.pdf#toolbar=0&navpanes=0#view=FitH"
        ></chakra.iframe>
      </Flex>
    </Container>
  );
}
