"use client";

import Gallery from "@/app/components/gallery";
import { Box } from "@chakra-ui/react";

export default function Gaming() {
  const images = [
    {
      src: "/hobbies/gaming/gallery-1.jpg",
      annotation: "The Last of Us: Part II",
    },
    {
      src: "/hobbies/gaming/thumbnail.jpg",
      annotation: "Firewatch",
    },
    {
      src: "/hobbies/gaming/gallery-3.jpg",
      annotation: "Journey",
    },
  ];
  return (
    <Box width={"full"}>
      <Gallery images={images} />
    </Box>
  );
}
