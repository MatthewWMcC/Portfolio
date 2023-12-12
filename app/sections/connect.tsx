"use client";

import { Stack, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { RiMapPin2Line } from "react-icons/ri";
import { GrUserManager } from "react-icons/gr";

import { SiGmail } from "react-icons/si";

import LinkButton from "../components/link-button";
import ScrollTo from "../components/scroll-to";

export default function Connect() {
  return (
    <Flex align="center" direction="column" minH={"300px"}>
      <ScrollTo id="Connect" />
      <Text fontSize="3xl">Connect with me</Text>
      <br></br>
      <Flex
        w={{ base: "100%" }}
        maxW={{ base: "400px", sm: "600px", lg: "800px" }}
        direction={["column", "row"]}
        gap={[4, 0]}
      >
        <Stack
          justify="center"
          gap={4}
          flex={1}
          pr={[0, 4, 6]}
          color={useColorModeValue("gray.400", "whiteAlpha.300")}
          borderRight={["none", "1px solid"]}
        >
          <LinkButton
            text={"Email"}
            icon={SiGmail}
            href={"mailto:matthewwmccracken@gmail.com"}
            borderColor={useColorModeValue("outline.light", "outline.dark")}
          />
          <LinkButton
            text={"Phone"}
            icon={FaPhone}
            href={"https://github.com/MatthewWMcC/GeoPro"}
            colorScheme={"cyan"}
          />
          <LinkButton
            text={"Resume"}
            icon={GrUserManager}
            href={"/resume"}
            isExternal={false}
            colorScheme="green"
          />
        </Stack>

        <Stack gap={4} flex={1} pl={[0, 4, 6]}>
          <LinkButton
            text={"GitHub"}
            icon={FaGithub}
            href={"https://github.com/MatthewWMcC"}
            colorScheme={"negative"}
          />
          <LinkButton
            text={"LinkedIn"}
            icon={FaLinkedin}
            href={"https://www.linkedin.com/in/matthew-mccracken/"}
            colorScheme={"linkedin"}
          />
          <LinkButton
            text={"Geoguessr"}
            icon={RiMapPin2Line}
            href={"https://www.geoguessr.com/user/619c429bacfc910001bc51d2"}
            colorScheme={"red"}
          />
        </Stack>
      </Flex>
    </Flex>
  );
}
