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

export default function Passions() {
  return (
    <Flex align="center" direction="column" minH="calc(100vh - 60px)">
      <Box id="Passions"></Box>
      <Text fontSize="3xl">Passions</Text>
      <br></br>
      <Grid
        w={{ base: "100%" }}
        maxW={{ base: "400px", sm: "600px", lg: "800px" }}
        gap={8}
        templateColumns={"repeat(1, 1fr)"}
        placeItems="center"
      >
        {passions.map(({ id, title, icon, description, images }) => {
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
      </Grid>
    </Flex>
  );
}
