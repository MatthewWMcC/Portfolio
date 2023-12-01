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
  PRISMA = "prisma",
  MONGO = "Mongo",
}

export interface projectProps {
  id: string;
  title: string;
  image: string;
  description: string;
  languages: language[];
  githubLink: string;
  liveLink?: string;
}

export interface IGalleryImage {
  image: string;
  annotation?: string;
}

export interface passionProps {
  id: string;
  title: string;
  icon: IconType;
  description: string;
  images: IGalleryImage[];
}

export interface iconSwitchProps {
  onChange: any;
  icon: IconType;
  checked: boolean;
}
