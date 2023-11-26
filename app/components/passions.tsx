"use client";

import {
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { passions } from "../utils/contants";
import Gallery from "./gallery";

export default function Passions() {
  return (
    <Flex
      id="Passions"
      align="center"
      direction="column"
      minH="calc(100vh - 60px)"
      p={4}
    >
      <Text fontSize="3xl">Passions</Text>
      <Flex
        w={{ base: "100%", md: "80%" }}
        maxW={{ base: "400px", md: "800px" }}
        gap={8}
        placeItems="center"
        direction="column"
      >
        {passions.map(({ id, title, icon, description, images }) => {
          return (
            <Flex
              key={id}
              direction="column"
              w="full"
              h="full"
              bg="gray.100"
              rounded="md"
              overflow="hidden"
            >
              <Box p={2}>
                <Flex justify="space-between" align="center">
                  <Text fontSize="xl" color="primary.800">
                    {title}
                  </Text>
                  <Icon as={icon} w={8} height={8}></Icon>
                </Flex>
                <Text fontSize="sm" color="primary.800">
                  {description}
                </Text>
              </Box>
              <Gallery images={images} />
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
}
