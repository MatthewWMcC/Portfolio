import { Box, Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";

export default function Landing() {
  return (
    <Flex
      id="Landing"
      align="center"
      justify={{ base: "center", md: "space-around" }}
      direction={{ base: "column", md: "row" }}
      minH="calc(100vh - 80px)"
    >
      <Stack gap="10px">
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
          <Link color="teal.500" href="/#Passions">
            Passions
          </Link>
          , and continuous development.
        </Text>
      </Stack>
      <Box boxSize={{ base: "xs", md: "md" }} my={{ base: 5, md: 0 }}>
        <Image src="./profile.jpg"></Image>
      </Box>
    </Flex>
  );
}
