"use client";

import {
  Box,
  Flex,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { IAchievement } from "../constants/types";
import { motion } from "framer-motion";

export default function Achievement({
  achievement,
}: {
  achievement: IAchievement;
}) {
  const { role, title, src, href, award, org } = achievement;
  return (
    <Link
      href={href}
      cursor={"pointer"}
      _hover={{ textDecoration: "none" }}
      flex={1}
      isExternal={true}
      width={"100%"}
    >
      <motion.div
        style={{ height: "100%" }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.25 },
        }}
      >
        <Flex
          rounded={"md"}
          border={"1px solid"}
          borderColor={useColorModeValue("outline.light", "outline.dark")}
          p={2}
          fontSize={["sm", "sm"]}
          h={"full"}
          justify={"space-between"}
          align={"center"}
        >
          <Stack justifyContent={"space-between"}>
            <Box>
              {" "}
              <Text pb={1} color={useColorModeValue("gray.600", "gray.400")}>
                {award}
              </Text>
              <Text fontSize={"lg"}>{org}</Text>
            </Box>

            <Box color={useColorModeValue("gray.600", "gray.400")}>
              <Text>{role}</Text>
              <Text>{title}</Text>
            </Box>
          </Stack>
        </Flex>
      </motion.div>
    </Link>
  );
}
