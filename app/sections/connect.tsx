"use client";

import {
  Stack,
  Flex,
  Grid,
  Icon,
  Text,
  useColorModeValue,
  Button,
  Box,
  Divider,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { RiMapPin2Line } from "react-icons/ri";

import { SiGmail } from "react-icons/si";

import LinkButton from "../components/LinkButton";

export default function Connect() {
  return (
    <Flex id="Connect" align="center" direction="column" minH={"50vh"}>
      <Text fontSize="3xl">Connect with me</Text>
      <br></br>
      <Grid
        w={{ base: "100%" }}
        maxW={{ base: "400px", sm: "600px", lg: "800px" }}
        gap={4}
        templateColumns={{ base: "repeat(1, 1fr)", sm: "1fr 1px 1fr" }}
        position={"relative"}
      >
        <Stack justify="center" gap={5}>
          <LinkButton
            text={"Email"}
            icon={SiGmail}
            href={"mailto:matthewwmccracken@gmail.com"}
          />
          <LinkButton
            text={"Phone"}
            icon={FaPhone}
            href={"https://github.com/MatthewWMcC/GeoPro"}
            colorScheme={"green"}
          />
        </Stack>
        <Box
          h={"100%"}
          borderLeft="1px solid"
          borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}
          display={{ base: "none", sm: "block" }}
        ></Box>
        <Stack gap={5}>
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
            colorScheme={"blue"}
          />
          <LinkButton
            text={"Instagram"}
            icon={FaInstagram}
            href={"https://www.instagram.com/matthewwmccracken/"}
            colorScheme={"pink"}
          />
          <LinkButton
            text={"Geoguessr"}
            icon={RiMapPin2Line}
            href={"https://www.geoguessr.com/user/619c429bacfc910001bc51d2"}
            colorScheme={"red"}
          />
        </Stack>
      </Grid>
    </Flex>
  );
}
