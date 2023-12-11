"use client";

import {
  AspectRatio,
  Box,
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
import { FaExternalLinkAlt, FaGamepad } from "react-icons/fa";
import { getHobbyIcon } from "../utils/helpers";

export default function HobbyThumbnail({
  slug,
  hobby,
}: {
  slug: string;
  hobby: IHobby;
}) {
  const { id, title, thumbnail } = hobby;

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
          transition: { duration: 0.25 },
        }}
      >
        <AspectRatio ratio={1} w="full">
          <Box rounded={"xl"} position={"relative"} border="1px solid">
            <Flex
              position={"absolute"}
              top={0}
              width={"full"}
              justify={"space-between"}
              bgGradient="linear(to-b, gray.900, transparent)"
              p={1}
              pb={3}
              align={"center"}
              color={"white"}
            >
              <Text fontSize={"lg"}>{title}</Text>
              <Icon as={getHobbyIcon(id)} w={6} height={6}></Icon>
            </Flex>
            <Image
              src={thumbnail}
              alt=""
              w={"full"}
              h={"full"}
              objectFit={"cover"}
            ></Image>
          </Box>
        </AspectRatio>
      </motion.div>
    </Link>
  );
}
