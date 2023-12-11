"use client";

import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
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
import { navLinks } from "../constants";

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const isLightMode = useMemo(() => colorMode === "light", [colorMode]);

  const ref = useRef(null);
  useOutsideClick({
    ref: ref,
    handler: () => {
      if (isOpen) {
        onToggle();
      }
    },
  });

  const NavLink = (title: string, linkTo: string) => {
    return (
      <Flex key={title}>
        <Link
          p={2}
          borderRadius="8px"
          href={linkTo}
          _hover={{
            bg: useColorModeValue("blue.100", "blue.900"),
          }}
          width="100%"
          textAlign="center"
          onClick={onToggle}
        >
          <Text fontWeight={600}>{title}</Text>
        </Link>
      </Flex>
    );
  };

  return (
    <Box
      boxShadow={useColorModeValue(
        "0px 2px 3px #2D3748",
        "0px 2px 3px #EDF2F7"
      )}
      bg={"inherit"}
      position="sticky"
      top={0}
      left={0}
      right={0}
      height="60px"
      zIndex={10}
      ref={ref}
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
          {navLinks.map(({ title, linkTo }) => {
            return NavLink(title, linkTo);
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
              src="/images/portfolio-logo-v2.png"
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
      <Collapse in={isOpen} animateOpacity style={{ overflow: "visible" }}>
        <Stack
          p={4}
          display={{ lg: "none" }}
          borderTop="1px"
          borderColor={useColorModeValue("gray.600", "gray.100")}
          bg={useColorModeValue("blue.50", "blue.950")}
          boxShadow={useColorModeValue(
            "0px 2px 3px #2D3748",
            "0px 2px 3px #EDF2F7"
          )}
        >
          {navLinks.map(({ title, linkTo }) => {
            return NavLink(title, linkTo);
          })}
        </Stack>
      </Collapse>
    </Box>
  );
}
