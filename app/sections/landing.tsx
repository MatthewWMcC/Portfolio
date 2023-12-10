import { Box, Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";

export default function Landing() {
  return (
    <Flex
      id="Landing"
      align="center"
      justify={{ base: "center", md: "space-evenly" }}
      direction={{ base: "column", md: "row" }}
      minH="calc(100vh - 100px)"
      gap={5}
    >
      <Stack gap="10px" flex={1}>
        <Heading size="xl" color="primary.800">
          {"Hi! I'm Matt."}
        </Heading>
        <Heading size="md" fontWeight="regular" color="primary.800">
          {"Stick around to learn a bit about me."}
        </Heading>
        <Text fontSize={{ base: "sm" }}>
          Welcome to the home of my{" "}
          <Link color="teal.500" href="/#Projects">
            Projects
          </Link>
          ,{" "}
          <Link color="teal.500" href="/#Hobbies">
            Hobbies
          </Link>
          , and continuous development.
        </Text>
      </Stack>
      <Box maxW={"sm"} rounded={"xl"} overflow={"hidden"} flex={1}>
        <Image src="./landing-photo.jpg" alt=""></Image>
      </Box>
    </Flex>
  );
}
