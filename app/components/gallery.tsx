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
import { IImage } from "../constants/types";
import { useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Gallery(props: { images: IImage[] }) {
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
  const buttonColor = useColorModeValue("gray.200", "gray.600");
  const buttonHoverColor = useColorModeValue("gray.300", "gray.600");

  return (
    <Flex direction="column" mx={{ base: -6, sm: 0 }}>
      <Flex direction={{ base: "column", md: "row" }} align={"center"}>
        <AspectRatio
          w="full"
          ratio={4 / 3}
          bg={"gray.700"}
          rounded={["none", "xl"]}
          overflow={"hidden"}
        >
          <Box position={"relative"} w="full">
            <Image
              src={currentImage.src}
              maxH={"100%"}
              h={"full"}
              alt=""
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
            <Flex
              gap={1}
              padding={1}
              bg={useColorModeValue("gray.500", "gray.900")}
              rounded={"full"}
              position={"absolute"}
              bottom={2}
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
            {currentImage.annotation && (
              <Flex
                padding={1}
                position={"absolute"}
                right={0}
                bottom={"10%"}
                maxW={["200px", "300px"]}
                bgGradient="linear(to-l, blackAlpha.900, blackAlpha.800, blackAlpha.400)"
                fontSize={["2xs", "sm", "md"]}
                roundedLeft={"lg"}
                color={"gray.100"}
              >
                {currentImage.annotation}
              </Flex>
            )}
          </Box>
        </AspectRatio>
      </Flex>
    </Flex>
  );
}
