"use client";

import {
  Box,
  Flex,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ProfileCard from "../components/profile-card";
import Rating from "../components/rating";
import ScrollTo from "../components/scroll-to";
import Achievement from "../components/achievement";
import { FaTrophy } from "react-icons/fa";

export default function AboutMe() {
  return (
    <Flex align="center" direction="column" position={"relative"}>
      <ScrollTo id="About" />
      <Text fontSize="3xl">About Me</Text>
      <br></br>
      <Flex
        w={{ base: "100%" }}
        maxW="800px"
        align="center"
        justify="space-evenly"
        direction={{ base: "column", md: "row" }}
        gap={6}
        flexWrap={"wrap"}
      >
        <Flex order={0}>
          <ProfileCard />
        </Flex>
        <Stack minW={"3xs"} maxW={"sm"} gap={5} order={{ base: 2, md: 1 }}>
          <Stack>
            <Text fontSize={"xl"}>The Journey</Text>
            <Text
              fontSize={["xs", "sm"]}
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {
                "I am a Software Developer with 2 years of professional experience and many more spent developing my skills. TypeScript, React, and Socket.io are my favorite learned techs because they enable me to build multiplayer games to enjoy with friends."
              }
            </Text>
          </Stack>
          <Stack>
            <Text fontSize={"xl"}>{"Breaking a Couple Eggs"}</Text>
            <Text
              fontSize={["xs", "sm"]}
              color={useColorModeValue("gray.600", "gray.400")}
            >
              When I take on a new project my goal is to learn a new technology
              or master an existing skill. I frequent{" "}
              <Link
                variant={"inline"}
                href="https://www.codecademy.com/articles/subject/web-development"
                isExternal={true}
              >
                Codecademy
              </Link>{" "}
              to learn about the new, hot tools in Web Development. Even this
              site was made with the{" "}
              <Link
                variant={"inline"}
                href="https://chakra-ui.com/"
                isExternal={true}
              >
                Chakra UI
              </Link>{" "}
              library as I picked it up. How am I doing?
            </Text>
            <Rating />
          </Stack>
          <Stack>
            <Text fontSize={"xl"}>{"It's like Poetry"}</Text>
            <Text
              fontSize={["xs", "sm"]}
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {
                "In my spare time, I enjoy Kayaking, Social Gaming, and learning about Geography and History. My hobbies inspire me to keep creating new online experiences where I can innovate, solve complex problems, and bring people together."
              }
            </Text>
          </Stack>
        </Stack>
        <Flex
          order={{ base: 1, md: 2 }}
          flex={"0 0 100%"}
          w={"100%"}
          justify={"center"}
          align={"center"}
          direction={{ base: "column", md: "row" }}
          gap={3}
          maxW={{ base: "sm", md: "full" }}
          mt={{ base: 0, md: 5 }}
        >
          <Icon as={FaTrophy} h={6} w={6} color={"yellow.500"} />
          <Flex w={"full"} gap={6} direction={{ base: "column", md: "row" }}>
            <Achievement
              achievement={{
                role: "Frontend Developer",
                title: "COVID in Canada Tracker",
                award: "AlphaStart Challenge Winner",
                org: "DeltaHacks 7",
                src: "/achievements/deltahacks-7.jpg",
                href: "https://devpost.com/software/covid-canada-tracker",
              }}
            />
            <Achievement
              achievement={{
                role: "Software Developer",
                title: "SpaceNearby",
                award: "Local Hackathon Winner/Global Nominee",
                org: "NASA SpaceApps Challenge 2020",
                src: "/achievements/spaceapps-logo.png",
                href: "https://2020.spaceappschallenge.org/challenges/connect/space-exploration-your-backyard/teams/academic-honesty/project",
              }}
            />
          </Flex>

          <Icon as={FaTrophy} h={6} w={6} color={"yellow.500"} />
        </Flex>
      </Flex>
    </Flex>
  );
}
