"use client";

import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  Stack,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useMemo } from "react";
import IconSwitch from "./IconSwitch";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const isLightMode = useMemo(() => colorMode === "light", [colorMode]);

  const links = ["About", "Projects", "Passions", "Resume", "Connect"];

  const NavLink = (link: string) => {
    return (
      <Flex key={link}>
        <Link
          p={2}
          borderRadius="8px"
          href={`/#${link}`}
          _hover={{
            bg: useColorModeValue("gray.100", "gray.900"),
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
        align="center"
        bg={useColorModeValue("white", "gray.800")}
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
              bg: useColorModeValue("gray.100", "gray.900"),
            }}
            href="/#"
            rounded="md"
            p={0.5}
          >
            <Image
              src="./portfolio-logo.png"
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
      <Collapse in={isOpen} animateOpacity>
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
