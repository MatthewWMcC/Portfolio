"use client";

import {
  Box,
  Flex,
  Grid,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { hobbies } from "../constants";
import Gallery from "../components/gallery";
import Hobby from "../components/hobby";

export default function Hobbies() {
  return (
    <Flex align="center" direction="column" minH="calc(100vh - 60px)">
      <Box id="Hobbies"></Box>
      <Text fontSize="3xl">Hobbies</Text>
      <br></br>
      <Grid
        w={{ base: "100%" }}
        maxW={{ base: "400px", sm: "1000px", lg: "1000px" }}
        gap={8}
        templateColumns={"repeat(1, 1fr)"}
        placeItems="center"
      >
        {hobbies.map(({ id, title, icon, description, images }) => {
          return (
            <Hobby
              key={id}
              id={id}
              title={title}
              icon={icon}
              description={description}
              images={images}
            />
          );
        })}
      </Grid>
    </Flex>
  );
}
