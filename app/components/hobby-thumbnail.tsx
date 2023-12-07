"use client";

import {
  AspectRatio,
  Box,
  Flex,
  Grid,
  Icon,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Gallery from "./gallery";
import { IconType } from "react-icons";
import { IGalleryImage, IHobbyThumbnail } from "../constants/types";
import { useRouter } from "next/navigation";

export default function HobbyThumbnail({ hobby }: { hobby: IHobbyThumbnail }) {
  const { id, icon, title, description, image } = hobby;
  const { push } = useRouter();

  const onClick = () => {
    push(`/hobby/${id}`);
  };
  return (
    <Flex
      key={id}
      direction="column"
      w="full"
      h="full"
      rounded="md"
      overflow={"hidden"}
      border="1px solid"
      borderColor={useColorModeValue("gray.700", "gray.100")}
      cursor={"pointer"}
      onClick={onClick}
    >
      <Flex p={0} direction={"column"}>
        <AspectRatio ratio={4 / 3} w="full">
          <Image src={image} objectFit="cover" alt=""></Image>
        </AspectRatio>
        <Flex p={2} direction={"column"} justifyContent={"space-between"}>
          <Flex justify="space-between" align="center">
            <Text fontSize={{ base: "lg", md: "xl" }}>{title}</Text>
            <Icon as={icon} w={8} height={8}></Icon>
          </Flex>
          <Text fontSize={{ base: "xs", lg: "sm" }}>{description}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
