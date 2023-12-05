import { Box, Container, Flex, Text, chakra } from "@chakra-ui/react";

export default function Page() {
  return (
    <Container maxW="container.xl" padding={8}>
      <Flex align="center" direction="column" width="100%">
        <Text fontSize="3xl">My Resume</Text>
        {/* <chakra.iframe
          height={"100%"}
          width="100%"
          src="./Matthew-McCracken-Resume.pdf"
        ></chakra.iframe> */}
      </Flex>
    </Container>
  );
}
