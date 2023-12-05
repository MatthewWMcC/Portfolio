import { Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { MdStarOutline, MdStarRate } from "react-icons/md";

export default function Rating() {
  const [rating, setRating] = useState(-1);
  const color = useColorModeValue("yellow.500", "yellow.400");

  return (
    <Flex gap={2}>
      {Array(5)
        .fill(0)
        .map((_, i) => {
          return (
            <Icon
              key={i}
              as={rating >= i ? MdStarRate : MdStarOutline}
              h={6}
              w={6}
              onClick={() => setRating(i)}
              color={color}
              cursor={"pointer"}
            />
          );
        })}
    </Flex>
  );
}
