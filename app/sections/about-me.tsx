"use client";

import { Box, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import ProfileCard from "../components/profile-card";

export default function AboutMe() {
  return (
    <Flex align="center" direction="column">
      <Box id="About"></Box>
      {/* <Text fontSize="3xl">About Me</Text>
      <br></br> */}
      <Flex
        w={{ base: "100%" }}
        maxW={{ base: "400px", sm: "600px", lg: "800px" }}
        align="center"
        justify="space-around"
        direction={{ base: "column", md: "row" }}
        gap={5}
      >
        <ProfileCard />
        <Stack minW={"3xs"} maxW={"sm"}>
          <Stack>
            <Text fontSize={"xl"}>Looking Back</Text>
            <Text
              fontSize={"sm"}
              color={useColorModeValue("gray.700", "gray.400")}
            >
              Software Developer with 2 years of professional experience. When a
              start a new project, I always look for new technologies to learn,
              and new problems to solve.
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
}
