"use client";

import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useOutsideClick,
} from "@chakra-ui/react";
import { useMemo, useRef } from "react";
import IconSwitch from "./icon-switch";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const isLightMode = useMemo(() => colorMode === "light", [colorMode]);

  const links = ["About", "Projects", "Passions", "Connect", "Resume"];

  const ref = useRef(null);
  useOutsideClick({
    ref: ref,
    handler: () => {
      if (isOpen) {
        onToggle();
      }
    },
  });

  const NavLink = (link: string) => {
    return (
      <Flex key={link}>
        <Link
          p={2}
          borderRadius="8px"
          href={`/#${link}`}
          _hover={{
            bg: useColorModeValue("blue.100", "blue.900"),
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
      boxShadow={useColorModeValue("4px 0px 5px black", "4px 0px 5px white")}
      bg={"inherit"}
    >
      <Flex
        justifyContent="space-between"
        height="100%"
        alignItems="center"
        px="4"
        py="2"
        align="center"
      >
        <Flex
          gap={{ base: 0.5, xl: 1 }}
          flex={{ base: 1 }}
          flexBasis="1"
          display={{ base: "none", lg: "flex" }}
        >
          {links.map((link) => {
            return NavLink(link);
          })}
        </Flex>
        <Flex flex={1} flexBasis="1" display={{ base: "flex", lg: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={<HamburgerIcon w={5} h={5} />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex>
          <Link
            _hover={{
              bg: useColorModeValue("blue.100", "blue.900"),
            }}
            href="/#"
            rounded="md"
            p={0.5}
          >
            <Image
              src="./portfolio-logo-v2.png"
              h="50px"
              width="50px"
              alt=""
            ></Image>
          </Link>
        </Flex>
        <Flex flex={{ base: 1 }} justify={"flex-end"} flexBasis="1">
          <IconSwitch
            icon={isLightMode ? IoSunny : IoMoon}
            onChange={toggleColorMode}
            checked={isLightMode}
          />
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity ref={ref}>
        <Stack
          bg={useColorModeValue("white", "gray.800")}
          p={4}
          display={{ lg: "none" }}
          borderY="1px"
          borderColor={"black"}
        >
          {links.map((link) => {
            return NavLink(link);
          })}
        </Stack>
      </Collapse>
    </Box>
  );
}
