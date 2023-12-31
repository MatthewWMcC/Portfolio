import { ReactPortal } from "react";
import { IconType } from "react-icons";

export enum language {
  JS = "JavaScript",
  CSS = "CSS",
  SOCKET = "Socket.IO",
  NODE = "Node.js",
  GCP = "GCP",
  TS = "TypeScript",
  SASS = "Sass",
  GRAPH = "GraphQL",
  NATIVE = "React Native",
  REACT = "React",
  BOOT = "Bootstrap",
  REDUX = "Redux",
  WEBPACK = "Webpack",
  MONGO = "Mongo",
  NEXT = "Next.js",
  CHAKRA = "Chakra UI",
}

export interface projectProps {
  id: string;
  title: string;
  image: string;
  description: string;
  languages: language[];
  githubLink: string;
  liveLink?: string;
  bg?: string;
}

export interface IImage {
  src: string;
  alt: string;
  annotation?: string | JSX.Element;
}

export interface hobbyProps {
  id: string;
  title: string;
  icon: IconType;
  description: string;
  images: IImage[];
}

export interface iconSwitchProps {
  onChange: any;
  icon: IconType;
  checked: boolean;
}

export interface IQuestionPrompt {
  id: string;
  question: string;
  answer: string;
  successMessage: string;
  failMessage: string;
}

export interface IHobbyItem {
  id: string;
  image?: string;
  text?: string;
  question?: string;
  answer?: string;
  successMessage?: string;
}

export interface IHobby {
  id: string;
  order: number;
  title: string;
  thumbnail: string;
  description: string;
  prev?: string;
  next?: string;
}

export enum AnswerState {
  UNANSWERED = "UNANSWERED",
  WRONG = "WRONG",
  CORRECT = "CORRECT",
  REVEAL = "REVEAL",
}

export interface IAchievement {
  role: string;
  title: string;
  org: string;
  award: string;
  src: string;
  href: string;
}
