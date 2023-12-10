"use client";

import Divider from "@/app/components/divider";
import HobbyImage from "@/app/components/hobby-image";
import QuestionPrompt from "@/app/components/question-prompt";
import { Box } from "@chakra-ui/react";

export default function Geography() {
  return (
    <Box width={"full"} height={"full"}>
      <HobbyImage
        image={{
          id: "geo1",
          src: "/hobbies/geography/geoguessr-logo.jpg",
        }}
      >
        {
          "I am an avid Geoguessr player. In Geoguessr, players explore random Google Street View locations to pinpoint their exact whereabouts. Players can use clues such as the local language, architecture, physical geography, and even license plates to geolocate themselves. The game is a fun and engaging way to broaden my knowledge of other countries."
        }
      </HobbyImage>
      <Divider />
      <HobbyImage
        image={{
          id: "geo2",
          src: "/hobbies/geography/geoguessr-quiz-1.png",
        }}
      >
        <QuestionPrompt
          questionPrompt={{
            id: "geo2",
            question:
              "Ready to try it for yourself? Here is a quick crash course. Enter the name of the country shown.",
            answer: "France",
            successMessage:
              "Well done! Memorable landmarks can quickly help with pinpointing a location. However, sometimes the clues are a bit less obvious.",
            failMessage: "Nice try! Better luck next time.",
          }}
        />
      </HobbyImage>
      <Divider />
    </Box>
  );
}
