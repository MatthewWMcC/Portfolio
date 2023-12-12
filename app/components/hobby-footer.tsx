"use client";

import { Button, Flex, Icon, Link, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdStarOutline, MdStarRate } from "react-icons/md";
import { capitalizeFirst, getHobbyIcon } from "../utils/helpers";

export default function HobbyFooter({
  prev,
  next,
}: {
  prev?: string;
  next?: string;
}) {
  return (
    <Flex justify={"space-between"} w={"full"} pt={2}>
      <Link href={!!prev ? `/hobby/${prev}` : "/#Hobbies"}>
        <Button
          w={{ sm: "200px" }}
          justifyContent={"space-between"}
          fontSize={["sm", "md"]}
          border={"1px solid"}
          borderColor={useColorModeValue("outline.light", "outline.dark")}
        >
          <Icon as={FaChevronLeft}></Icon>
          <Flex align={"center"} gap={2}>
            {!!prev ? capitalizeFirst(prev) : "Return to Homepage"}
            {!!prev && <Icon as={getHobbyIcon(prev)}></Icon>}
          </Flex>
        </Button>
      </Link>

      <Link href={!!next ? `/hobby/${next}` : "/#Hobbies"}>
        <Button
          w={{ sm: "200px" }}
          justifyContent={"space-between"}
          fontSize={["sm", "md"]}
          border={"1px solid"}
          borderColor={useColorModeValue("outline.light", "outline.dark")}
        >
          <Flex align={"center"} gap={2}>
            {!!next && <Icon as={getHobbyIcon(next)}></Icon>}
            {!!next ? capitalizeFirst(next) : "Return to Homepage"}
          </Flex>
          <Icon as={FaChevronRight}></Icon>
        </Button>
      </Link>
    </Flex>
  );
}
