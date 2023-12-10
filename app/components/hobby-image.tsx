"use client";

import { AspectRatio, Box, Flex, Image, Text } from "@chakra-ui/react";
import { IImage } from "../constants/types";

export default function HobbyImage({
  image,
  children,
}: {
  image: IImage;
  children: React.ReactNode;
}) {
  return (
    <Flex direction={"column"}>
      <Flex
        direction={{ base: "column", md: "row" }}
        rounded={"xl"}
        overflow={"hidden"}
        border={"solid 1px"}
        height={"full"}
      >
        <AspectRatio
          w="full"
          ratio={4 / 3}
          borderRight={{ base: "none", md: "solid 1px" }}
          borderBottom={{ base: "solid 1px", md: "none" }}
        >
          <Image src={image.src} maxH={"100%"} alt=""></Image>
        </AspectRatio>

        <Flex
          w={{ base: "100%", md: "250px", lg: "300px" }}
          maxWidth={"100%"}
          flexShrink={0}
          p={2}
          fontSize={["xs", "sm", "sm"]}
          height={"full"}
          direction={"column"}
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
