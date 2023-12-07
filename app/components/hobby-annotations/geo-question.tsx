"use client";

import { IGeoQuestion } from "@/app/constants/types";
import { Flex, Text } from "@chakra-ui/react";

export default function GeoQuestion({
  geoquestion,
}: {
  geoquestion: IGeoQuestion;
}) {
  const { question, answer, afterward } = geoquestion;

  return (
    <Flex direction={"column"}>
      <Text>{question}</Text>
    </Flex>
  );
}
