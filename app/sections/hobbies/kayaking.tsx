"use client";

import Gallery from "@/app/components/gallery";
import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import { FaWater } from "react-icons/fa";
import { WiSunrise } from "react-icons/wi";

export default function Kayaking() {
  const images = [
    {
      src: "/hobbies/kayaking/gallery-1.jpg",
      alt: "Photo of Me Kayaking in Lake Brienz, Interlaken.",
      annotation: (
        <Flex align={"center"} gap={2}>
          {"Lake Brienz, Interlaken"}{" "}
          <Image
            src={"/hobbies/kayaking/swiss-flag.svg"}
            alt={"Swiss flag icon"}
            h={4}
            w={4}
          />
        </Flex>
      ),
    },
    {
      src: "/hobbies/kayaking/gallery-2.jpg",
      alt: "My friends and I Kayaking in Lake Brienz.",
      annotation: "Linked together in Interlaken",
    },
    {
      src: "/hobbies/kayaking/gallery-3.jpg",
      alt: "My Kayak docked at the cliff face in Lake Brienz.",
      annotation: (
        <Flex align={"center"} gap={2}>
          {"Where the water meets the rocks."}{" "}
          <Icon as={FaWater} color={"blue.400"} h={4} w={4} />
        </Flex>
      ),
    },
    {
      src: "/hobbies/kayaking/gallery-4.jpg",
      alt: "My friend and I Kayaking in the Toronto Harbour.",
      annotation:
        "No visit to Toronto Island is complete without kayaking in the harbour.",
    },
    {
      src: "/hobbies/kayaking/gallery-5.jpg",
      alt: "A late evening photo of Simcoe Lake.",
      annotation: (
        <Flex align={"center"} gap={2}>
          {"Lake Simcoe at Dusk"}{" "}
          <Image
            src={"/hobbies/kayaking/canada-flag.svg"}
            alt={"canada flag icon"}
            h={4}
            w={4}
          />
        </Flex>
      ),
    },
    {
      src: "/hobbies/kayaking/gallery-6.jpg",
      alt: "An early morning photo of Simcoe Lake.",
      annotation: (
        <Flex align={"center"} gap={2}>
          {"It was worth the 6 AM wakeup"}{" "}
          <Icon as={WiSunrise} color={"orange.300"} h={6} w={6} />
        </Flex>
      ),
    },
  ];
  return (
    <Box width={"full"}>
      <Gallery images={images} />
    </Box>
  );
}
