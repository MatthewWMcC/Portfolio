"use client";

import {
  AspectRatio,
  Flex,
  Icon,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { IHobby } from "../constants/types";
import { motion } from "framer-motion";
import { MdKayaking } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";
import { FaGamepad } from "react-icons/fa";

export default function HobbyThumbnail({
  slug,
  hobby,
}: {
  slug: string;
  hobby: IHobby;
}) {
  const { id, title, description, thumbnail } = hobby;

  const getIcon = () => {
    if (id === "geography") {
      return IoMdGlobe;
    } else if (id === "kayaking") {
      return MdKayaking;
    } else if (id === "gaming") {
      return FaGamepad;
    }
  };

  return (
    <Link
      href={`/hobby/${id}`}
      w="full"
      h="full"
      cursor={"pointer"}
      _hover={{ textDecoration: "none" }}
    >
      <motion.div
        style={{ height: "100%" }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
      >
        <Flex
          direction="column"
          h="full"
          rounded="md"
          overflow={"hidden"}
          border="1px solid"
          borderColor={useColorModeValue("gray.600", "gray.100")}
        >
          <AspectRatio ratio={4 / 3} w="full">
            <Image src={thumbnail} alt=""></Image>
          </AspectRatio>
          <Flex p={2} direction={"column"} justifyContent={"space-between"}>
            <Flex justify="space-between" align="center">
              <Text fontSize={{ base: "lg", md: "xl" }}>{title}</Text>
              <Icon as={getIcon()} w={8} height={8}></Icon>
            </Flex>
            <Text fontSize={{ base: "xs", lg: "sm" }}>{description}</Text>
          </Flex>
        </Flex>
      </motion.div>
    </Link>
  );
}
