"use client";

import {
  Badge,
  Box,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
  AspectRatio,
} from "@chakra-ui/react";
import { projectProps } from "../utils/types";
import { languageColorMap } from "../utils/contants";
import { LinkIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import NextLink from "next/link";

export default function Project(props: projectProps) {
  const { title, description, image, languages, githubLink, liveLink } = props;
  return (
    <Flex
      direction="column"
      w="full"
      h="full"
      bg="gray.100"
      rounded="md"
      overflow="hidden"
      gap={0}
      outline="solid 1px"
      outlineColor="gray.100"
    >
      <AspectRatio ratio={1} w="full">
        <Image className="img-cover" src={image} objectFit="contain"></Image>
      </AspectRatio>
      <Box w="full" p={2} pt={1}>
        <Flex justifyContent="space-between" align="center" pb={1}>
          <Text fontSize="xl" color="primary.800">
            {title}
          </Text>
          <Flex gap={1}>
            {liveLink && (
              <Link
                href={liveLink}
                _hover={{
                  bg: "gray.200",
                }}
                rounded="md"
                isExternal
              >
                <IconButton icon={<LinkIcon />} aria-label="live link" />
              </Link>
            )}
            <Link
              href={githubLink}
              _hover={{
                bg: "gray.200",
              }}
              rounded="md"
              isExternal
            >
              <IconButton icon={<Icon as={FaGithub} />} aria-label="github" />
            </Link>
          </Flex>
        </Flex>
        <Flex gap={2} flexWrap="wrap" maxW="100%">
          {languages.map((language) => {
            return (
              <Badge key={language} colorScheme={languageColorMap[language]}>
                {language}
              </Badge>
            );
          })}
        </Flex>
        <br></br>
        <Text fontSize="xs" color="primary.800">
          {description}
        </Text>
      </Box>
    </Flex>
  );
}
