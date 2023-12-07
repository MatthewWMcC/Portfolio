"use client";

import { Box } from "@chakra-ui/react";
import {
  g1Annotation,
  g2Annotation,
  g3Question,
} from "../constants/annotations";
import Geography1 from "./passion-annotations/geography-1";
import GeoQuestion from "./passion-annotations/geo-question";

export default function Annotation({ id }: { id: string }) {
  switch (id) {
    case "g1":
      return g1Annotation;
    case "g2":
      return g2Annotation;
    case "g3":
      return <GeoQuestion geoquestion={g3Question} />;
    default:
      return "Incorrect Id";
  }
}
