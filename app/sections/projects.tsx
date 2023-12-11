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
import { projects } from "../constants";
import Project from "../components/project";
import ScrollTo from "../components/scroll-to";

export default function Projects() {
  return (
    <Flex align="center" direction="column" position={"relative"}>
      <ScrollTo id="Projects" />
      <Text fontSize="3xl">Projects</Text>
      <br></br>
      <Grid
        w={{ base: "100%" }}
        maxW={{ base: "350px", md: "800px" }}
        gap={8}
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2 ,1fr)",
        ]}
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
