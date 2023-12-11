"use client";

import {
  AspectRatio,
  Box,
  Flex,
  Icon,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { IImage } from "../constants/types";
import { FaExpand } from "react-icons/fa";
import { useState } from "react";

export default function HobbyImage({
  image,
  children,
}: {
  image: IImage;
  children: React.ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { src } = image;

  const handleOpen = () => {
    onOpen();
  };

  return (
    <Flex direction={"column"} position={"relative"}>
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
          <Flex position={"relative"} cursor={"pointer"} onClick={handleOpen}>
            <Image
              h="full"
              w="full"
              fit={"cover"}
              src={src}
              maxH={"100%"}
              alt=""
            ></Image>
            <Box position={"absolute"} right={2} top={2}>
              <IconButton
                icon={<Icon as={FaExpand} h={5} w={5} />}
                aria-label="expand image"
                bg={"gray.900"}
                color={"gray.200"}
                h={8}
                w={8}
                onClick={handleOpen}
              />
            </Box>
          </Flex>
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

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        size="6xl"
        isCentered={true}
        allowPinchZoom={true}
      >
        <ModalOverlay />

        <ModalContent
          m={0}
          alignContent={"center"}
          justifyContent={"center"}
          bg={"transparent"}
          w={"fit-content"}
          h={"fit-content"}
        >
          <ModalCloseButton />
          <ModalBody p={0}>
            <Image
              maxH="80vh"
              maxW="full"
              h={"auto"}
              w={"auto"}
              fit={"contain"}
              src={src}
              alt="Zoomed In Image"
            ></Image>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
