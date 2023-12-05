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
  useColorModeValue,
} from "@chakra-ui/react";
import { projectProps } from "../utils/types";
import { languageColorMap } from "../utils/contants";
import { LinkIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";

export default function Project(props: projectProps) {
  const { title, description, image, languages, githubLink, liveLink } = props;
  return (
    <Flex
      direction="column"
      w="full"
      h="full"
      outline="1px solid"
      outlineColor={useColorModeValue("gray.700", "gray.100")}
      rounded="md"
      overflow="hidden"
      gap={0}
    >
      <AspectRatio ratio={1} w="full">
        <Image
          className="img-cover"
          src={image}
          objectFit="contain"
          alt=""
        ></Image>
      </AspectRatio>
      <Box w="full" p={2} pt={1}>
        <Flex justifyContent="space-between" align="center" pb={1}>
          <Text fontSize="xl">{title}</Text>
          <Flex gap={1}>
            {liveLink && (
              <Link href={liveLink} rounded="md" isExternal>
                <IconButton
                  bg="transparent"
                  icon={<LinkIcon />}
                  aria-label="live link"
                  tabIndex={-1}
                />
              </Link>
            )}
            <Link href={githubLink} rounded="md" isExternal>
              <IconButton
                bg="transparent"
                icon={<Icon as={FaGithub} />}
                aria-label="github"
                tabIndex={-1}
              />
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
