"use client";

import {
  AspectRatio,
  Box,
  Flex,
  IconButton,
  Image,
  Text,
  useColorModeValue,
  useConst,
} from "@chakra-ui/react";
import { IGalleryImage } from "../constants/types";
import { useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Annotation from "./annotation";

export default function Gallery(props: { images: IGalleryImage[] }) {
  const { images } = props;
  const length = useConst(() => images.length);
  const [index, setIndex] = useState(0);

  const currentImage = useMemo(() => images[index], [index, images]);

  const decrement = () => {
    setIndex(() => {
      if (index > 0) {
        return index - 1;
      }
      return index;
    });
  };
  const increment = () => {
    setIndex(() => {
      if (index < length - 1) {
        return index + 1;
      }
      return index;
    });
  };
  const buttonColor = useColorModeValue("gray.200", "gray.700");
  const buttonHoverColor = useColorModeValue("gray.300", "gray.600");

  return (
    <Flex direction="column">
      <Flex
        direction={{ base: "column", md: "row" }}
        p={2}
        pl={0}
        pr={{ base: 0, md: 2 }}
        align={"center"}
      >
        <AspectRatio w="full" maxH={700}>
          <Flex position={"relative"} w="full">
            <Image
              src={currentImage.image}
              maxH={"100%"}
              alt=""
              className="img-cover"
            ></Image>
            <Flex
              pos="absolute"
              top="50%"
              left="10px"
              right="10px"
              transform={"translateY(-50%)"}
            >
              {index > 0 && (
                <IconButton
                  aria-label="previous photo"
                  icon={<FaChevronLeft />}
                  rounded={"full"}
                  onClick={decrement}
                  opacity={0.8}
                  bg={buttonColor}
                  _hover={{
                    bg: buttonHoverColor,
                  }}
                />
              )}
              {index < length - 1 && (
                <IconButton
                  aria-label="next photo"
                  icon={<FaChevronRight />}
                  rounded={"full"}
                  ml="auto"
                  onClick={increment}
                  opacity={0.8}
                  bg={buttonColor}
                  _hover={{
                    bg: buttonHoverColor,
                  }}
                />
              )}
            </Flex>
          </Flex>
        </AspectRatio>

        <Box
          h={"100%"}
          borderLeft="1px solid"
          borderColor={useColorModeValue("gray.700", "gray.100")}
          opacity={0.75}
          m={3}
          display={{ base: "none", md: "block" }}
        ></Box>

        <Box
          w={{ base: "100%", md: "200px", lg: "250px" }}
          maxWidth={"100%"}
          flexShrink={0}
          px={2}
          position={"relative"}
          fontSize={["xs", "xs", "sm"]}
        >
          <Annotation id={currentImage.id} />
        </Box>
      </Flex>

      <Flex justify="center" pb={1}>
        <Flex
          gap={1}
          padding={1}
          bg={useColorModeValue("gray.500", "gray.900")}
          rounded={"full"}
        >
          {Array(length)
            .fill(0)
            .map((_, i) => {
              return (
                <Box
                  key={i}
                  w={2}
                  h={2}
                  bg={i === index ? "white" : "gray.300"}
                  rounded="full"
                ></Box>
              );
            })}
        </Flex>
      </Flex>
    </Flex>
  );
}
