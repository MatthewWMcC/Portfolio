"use client";

import {
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { AnswerState, IQuestionPrompt } from "../constants/types";
import { useMemo, useState } from "react";
import { getAnswerPromptIcon, isStringEqual } from "../utils/helpers";

export default function QuestionPrompt({
  questionPrompt,
}: {
  questionPrompt: IQuestionPrompt;
}) {
  const { id, question, answer, successMessage, failMessage } = questionPrompt;

  const [value, setValue] = useState("");
  const [answerState, setAnswerState] = useState(AnswerState.UNANSWERED);

  const handleGuess = () => {
    if (isStringEqual(value, answer)) {
      setAnswerState(AnswerState.CORRECT);
    } else {
      setAnswerState(AnswerState.WRONG);
    }
  };

  const handleReveal = () => {
    setValue(answer);
    setAnswerState(AnswerState.REVEAL);
  };

  const answerPromptIcon = useMemo(() => {
    return getAnswerPromptIcon(answerState);
  }, [answerState]);

  const questionDone = useMemo(() => {
    return (
      answerState === AnswerState.CORRECT || answerState === AnswerState.REVEAL
    );
  }, [answerState]);

  return (
    <Flex direction={"column"}>
      <Text>{question}</Text>
      <Flex color={"black"} py={2} direction={"column"}>
        <InputGroup>
          <InputLeftElement pointerEvents="none" color="gray.600">
            <Icon
              as={answerPromptIcon.icon}
              color={answerPromptIcon.color}
              w={8}
              h={8}
            />
          </InputLeftElement>
          <Input
            bg={"white"}
            _placeholder={{ opacity: 1, color: "gray.500" }}
            placeholder="Enter a guess"
            borderColor={"gray.900"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleGuess();
              }
            }}
            maxLength={15}
            pr={"72px"}
            isDisabled={questionDone}
          />
          {!questionDone && (
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={handleGuess}
                colorScheme="blue"
                type="submit"
              >
                Enter
              </Button>
            </InputRightElement>
          )}
        </InputGroup>
        {answerState === AnswerState.WRONG && (
          <>
            <Button
              h="1.75rem"
              size="sm"
              onClick={handleReveal}
              colorScheme="negative"
              mt={2}
            >
              Reveal
            </Button>
          </>
        )}
      </Flex>
      {answerState === AnswerState.CORRECT && <Text>{successMessage}</Text>}
      {answerState === AnswerState.REVEAL && <Text>{failMessage}</Text>}
    </Flex>
  );
}
