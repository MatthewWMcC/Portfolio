import { AnswerState } from "../constants/types";
import { IoCheckmark, IoClose, IoGlobe, IoEye } from "react-icons/io5";

export const standardizeString = (str: string) => {
  return str.toLocaleLowerCase().split(" ").join("");
};

export const isStringEqual = (str1: string, str2: string) => {
  return standardizeString(str1) === standardizeString(str2);
};

export const getAnswerPromptIcon = (value: AnswerState) => {
  if (value === AnswerState.CORRECT) {
    return {
      icon: IoCheckmark,
      color: "green.400",
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
