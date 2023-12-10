import { AnswerState } from "../constants/types";
import { IoCheckmark, IoClose, IoGlobe, IoEye } from "react-icons/io5";

export const isStringEqual = (string1: string, string2: string) => {
  return string1.toLocaleLowerCase() === string2.toLocaleLowerCase();
};

export const getAnswerPromptIcon = (value: AnswerState) => {
  if (value === AnswerState.CORRECT) {
    return {
      icon: IoCheckmark,
      color: "green",
    };
  } else if (value === AnswerState.WRONG) {
    return {
      icon: IoClose,
      color: "red",
    };
  } else if (value === AnswerState.REVEAL) {
    return {
      icon: IoEye,
      color: "black",
    };
  }
  return {
    icon: IoGlobe,
    color: "gray.700",
  };
};
