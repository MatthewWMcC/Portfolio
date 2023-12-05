"use client";

import {
  AspectRatio,
  Box,
  Flex,
  IconButton,
  Image,
  useColorModeValue,
  useConst,
} from "@chakra-ui/react";
import { IGalleryImage } from "../utils/types";
import { useMemo, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

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

  return (
    <Flex direction="column" w="full" position="relative">
      <AspectRatio>
        <Flex>
          <Image src={currentImage.image} maxH={"100%"} alt=""></Image>
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
                icon={<ChevronLeftIcon w={8} h={8} />}
                rounded={"full"}
                onClick={decrement}
                opacity={0.8}
                bg={buttonColor}
              />
            )}
            {index < length - 1 && (
              <IconButton
                aria-label="next photo"
                icon={<ChevronRightIcon w={8} h={8} />}
                rounded={"full"}
                ml="auto"
                onClick={increment}
                opacity={0.8}
                bg={buttonColor}
              />
            )}
          </Flex>
        </Flex>
      </AspectRatio>

      {/* {currentImage.annotation && (
        <Box px={2}>
          <Text fontSize="xs" color="primary.800">
            {currentImage.annotation}
          </Text>
        </Box>
      )} */}
      <Flex gap={1.5} justify="center" pt={1} pb={2}>
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
                outline="0.5px solid"
                outlineColor="gray.400"
              ></Box>
            );
          })}
      </Flex>
    </Flex>
  );
}
