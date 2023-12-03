"use client";

import {
  AspectRatio,
  Box,
  Flex,
  Icon,
  IconButton,
  Image,
  Stack,
  Text,
  useClipboard,
  useColorModeValue,
} from "@chakra-ui/react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import {
  MdContentCopy,
  MdOutlineAlternateEmail,
  MdOutlineSchool,
} from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";

export default function ProfileCard() {
  const { onCopy } = useClipboard("matthewwmccracken@gmail.com");

  return (
    <Box
      rounded={"lg"}
      maxW={"sm"}
      bg={useColorModeValue("gray.100", "gray.700")}
    >
      <Box p={2}>
        <Text fontSize="lg" fontWeight="bold">
          Matthew McCracken
        </Text>
      </Box>
      <AspectRatio>
        <Image src="./profile.jpg" alt=""></Image>
      </AspectRatio>
      <Flex
        alignItems="center"
        gap={4}
        bg={useColorModeValue("blue.400", "blue.700")}
        px={5}
        py={2}
        color={"white"}
      >
        <Icon as={HiMagnifyingGlass} h={8} w={8} />
        <Text fontSize="sm" fontWeight="bold">
          Looking for roles in Software Development and Design
        </Text>
      </Flex>
      <Stack px={5} py={2}>
        <Flex alignItems="center" gap={4}>
          <Icon as={MdOutlineSchool} h={8} w={8} />
          <Text fontSize="sm">
            Bachelors of Software Engineering from McMaster University
          </Text>
        </Flex>
        <Flex alignItems="center" gap={4}>
          <Icon as={CiLocationArrow1} h={8} w={8} />
          <Text fontSize="sm">Hamilton, ON</Text>
        </Flex>
        <Flex alignItems="center" gap={4}>
          <Icon as={MdOutlineAlternateEmail} h={8} w={8} />
          <Flex alignItems="center">
            <Text fontSize="xs">matthewwmccracken@gmail.com</Text>
            <IconButton
              bg="transparent"
              icon={<Icon as={MdContentCopy} h={4} w={4} />}
              aria-label="copy email to clipboard"
              onClick={onCopy}
            />
          </Flex>
        </Flex>
      </Stack>
    </Box>
  );
}
