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
import Passion from "./passion";

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
            <Passion
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
