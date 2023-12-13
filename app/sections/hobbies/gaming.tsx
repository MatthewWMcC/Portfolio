"use client";

import Gallery from "@/app/components/gallery";
import { Box } from "@chakra-ui/react";

export default function Gaming() {
  const images = [
    {
      src: "/hobbies/gaming/gallery-1.jpg",
      alt: "Poster for The Last of Us: Part II.",
      annotation: "The Last of Us: Part II",
    },
    {
      src: "/hobbies/gaming/thumbnail.jpg",
      alt: "Poster for Firewatch",
      annotation: "Firewatch",
    },
    {
      src: "/hobbies/gaming/gallery-3.jpg",
      alt: "Poster for Journey",
      annotation: "Journey",
    },
  ];
  return (
    <Box width={"full"}>
      <Gallery images={images} />
    </Box>
  );
}
