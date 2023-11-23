"use client";

import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();
  const links = [
    "Projects",
    "Passions",
    "Achievements",
    "Resume",
    "Contact Me",
  ];

  const getNavLink = (link: string) => {
    return (
      <Flex key={link}>
        <Link
          p={2}
          borderRadius="8px"
          href={`/#${link}`}
          _hover={{
            bg: "gray.200",
          }}
          width="100%"
          textAlign="center"
          onClick={onToggle}
        >
          <Text fontWeight={600}>{link}</Text>
        </Link>
      </Flex>
    );
  };

  return (
    <Box
      style={{ position: "sticky", top: 0, height: 60, zIndex: 10 }}
      boxShadow="4px 0px 5px black"
    >
      <Flex
        justifyContent="space-between"
        height="100%"
        alignItems="center"
        px="4"
        py="2"
        backgroundColor="white"
      >
        <Flex gap="5px" display={{ base: "none", lg: "flex" }}>
          {links.map((link) => {
            return getNavLink(link);
          })}
        </Flex>
        <Flex display={{ base: "flex", lg: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={<HamburgerIcon w={5} h={5} />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Stack
          bg={"white"}
          p={4}
          display={{ lg: "none" }}
          borderY="1px"
          borderColor={"black"}
        >
          {links.map((link) => {
            return getNavLink(link);
          })}
        </Stack>
      </Collapse>
    </Box>
  );
}
