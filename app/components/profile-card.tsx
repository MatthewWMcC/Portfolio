"use client";

import {
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
import { HiOutlineBriefcase } from "react-icons/hi2";
import { MdOutlineAlternateEmail, MdOutlineSchool } from "react-icons/md";
import { LuCopy, LuCopyCheck } from "react-icons/lu";

import { TiLocationArrowOutline } from "react-icons/ti";

export default function ProfileCard() {
  const { onCopy, hasCopied } = useClipboard(
    "matthewwmccracken@gmail.com",
    5000
  );

  return (
    <Box
      rounded={"lg"}
      maxW={"sm"}
      border="1px solid"
      borderColor={useColorModeValue("outline.light", "outline.dark")}
    >
      <Box px={5} py={2}>
        <Text fontSize="lg" fontWeight="bold">
          Matthew McCracken
        </Text>
      </Box>
      <Image src="./profile5x4.jpg" alt="Profile Photo"></Image>
      <Flex
        alignItems="center"
        gap={4}
        bg={useColorModeValue("gray.700", "gray.100")}
        px={5}
        py={2}
        color={useColorModeValue("gray.100", "gray.800")}
      >
        <Icon as={HiOutlineBriefcase} h={8} w={8} />
        <Text fontSize={{ base: "sm", sm: "md" }} fontWeight={"bold"}>
          {"Software Developer @ Geotab"}
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
          <Icon as={TiLocationArrowOutline} h={8} w={8} />
          <Text fontSize="sm">Hamilton, ON</Text>
        </Flex>
        <Flex alignItems="center" gap={4}>
          <Icon as={MdOutlineAlternateEmail} h={8} w={8} />
          <Flex alignItems="center" gap={1}>
            <Text fontSize={{ base: "xs", sm: "sm" }}>
              matthewwmccracken@gmail.com
            </Text>
            <IconButton
              bg="transparent"
              icon={<Icon as={hasCopied ? LuCopyCheck : LuCopy} h={5} w={5} />}
              aria-label="copy email to clipboard"
              onClick={onCopy}
            />
          </Flex>
        </Flex>
      </Stack>
    </Box>
  );
}
