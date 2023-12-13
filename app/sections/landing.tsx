"use client";

import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Landing() {
  const transition = {
    ease: "easeIn",
    duration: 0.25,
  };
  return (
    <Flex
      id="Landing"
      align="center"
      justify={{ base: "center", md: "space-around" }}
      direction={{ base: "column-reverse", md: "row" }}
      minH="calc(100vh - 100px)"
      gap={[10, 10, 5]}
      mx={{ base: "auto", lg: "-30px" }}
    >
      <Stack gap="10px" textAlign={{ base: "center", md: "start" }}>
        <Heading size="xl">{"Hi! My name is Matt."}</Heading>

        <Text fontSize="md">
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
      <motion.div
        style={{ height: "100%" }}
        initial={{ scale: 1.4, opacity: 0 }}
        transition={transition}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Box
          height={"fit-content"}
          maxW={["xs", "xs", "sm", "md"]}
          overflow={"hidden"}
          p={[6, 6, 6, 8]}
          rounded={"full"}
          border={"2px dashed"}
          borderColor={useColorModeValue("outline.light", "outline.dark")}
        >
          <Image src="./landing-photo.jpg" alt="" rounded={"full"}></Image>
        </Box>
      </motion.div>
    </Flex>
  );
}
