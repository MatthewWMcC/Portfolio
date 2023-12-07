"use client";

import {
  Box,
  Flex,
  Grid,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Gallery from "./gallery";
import { IconType } from "react-icons";
import { IGalleryImage } from "../constants/types";

export default function Hobby({
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
      rounded="md"
      border="1px solid"
      borderColor={useColorModeValue("gray.700", "gray.100")}
    >
      <Box p={2}>
        <Flex justify="space-between" align="center">
          <Text fontSize="xl">{title}</Text>
          <Icon as={icon} w={8} height={8}></Icon>
        </Flex>
      </Box>
      <Gallery images={images} />
    </Flex>
  );
}
