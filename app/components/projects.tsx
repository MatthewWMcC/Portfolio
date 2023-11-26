"use client";

import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { projects } from "../utils/contants";
import Project from "./project";

export default function Projects() {
  return (
    <Flex
      id="Projects"
      align="center"
      direction="column"
      minH="calc(100vh - 60px)"
      p={4}
    >
      <Text fontSize="3xl">Projects</Text>
      <Grid
        w={{ base: "100%", md: "80%" }}
        maxW={{ base: "400px", md: "800px" }}
        gap={8}
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2,1fr)"]}
        placeItems="center"
      >
        {projects.map(
          ({
            id,
            title,
            description,
            image,
            languages,
            githubLink,
            liveLink,
          }) => {
            return (
              <Project
                key={id}
                id={id}
                title={title}
                description={description}
                image={image}
                languages={languages}
                githubLink={githubLink}
                liveLink={liveLink}
              ></Project>
            );
          }
        )}
      </Grid>
    </Flex>
  );
}
