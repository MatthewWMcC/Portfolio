"use client";

import {
  Box,
  Flex,
  Grid,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { passions } from "../utils/contants";
import Gallery from "./gallery";
import { IconType } from "react-icons";
import { IGalleryImage } from "../utils/types";

export default function Passion({
  id,
  title,
  icon,
  description,
  images,
}: {
  id: string;
  title: string;
  icon: IconType;
  description: string;
  images: IGalleryImage[];
}) {
  return (
    <Flex
      key={id}
      direction="column"
      w="full"
      h="full"
      bg={useColorModeValue("gray.100", "gray.700")}
      rounded="md"
      overflow="hidden"
    >
      <Box p={2}>
        <Flex justify="space-between" align="center">
          <Text fontSize="xl">{title}</Text>
          <Icon as={icon} w={8} height={8}></Icon>
        </Flex>
        {/* <Text fontSize="sm">
          {description}
        </Text> */}
      </Box>
      <Gallery images={images} />
    </Flex>
  );
}
