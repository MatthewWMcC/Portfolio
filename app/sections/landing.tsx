import { Box, Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";

export default function Landing() {
  return (
    <Flex
      id="Landing"
      align="center"
      justify={{ base: "center", md: "space-around" }}
      direction={{ base: "column", md: "row" }}
      minH="calc(100vh - 100px)"
      gap={5}
    >
      <Stack gap="10px">
        <Heading size="xl">{"Hi! I'm Matt."}</Heading>
        <Heading size="md" fontWeight="regular">
          {"Stick around to learn a bit about me."}
        </Heading>
        <Text fontSize={{ base: "sm" }}>
          Welcome to the home of my{" "}
          <Link variant={"inline"} href="/#Projects">
            Projects
          </Link>
          ,{" "}
          <Link variant={"inline"} href="/#Hobbies">
            Hobbies
          </Link>
          , and continuous development.
        </Text>
      </Stack>
      <Box maxW={"sm"} rounded={"xl"}>
        <Image src="./landing-photo.jpg" alt="" rounded={"xl"}></Image>
      </Box>
    </Flex>
  );
}
