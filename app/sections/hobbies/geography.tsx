"use client";

import Divider from "@/app/components/divider";
import HobbyImage from "@/app/components/hobby-image";
import QuestionPrompt from "@/app/components/question-prompt";
import { Box, Link, Text } from "@chakra-ui/react";

export default function Geography() {
  return (
    <Box width={"full"}>
      <HobbyImage
        image={{
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
      <HobbyImage
        image={{
          src: "/hobbies/geography/geoguessr-quiz-2.png",
        }}
      >
        <QuestionPrompt
          questionPrompt={{
            id: "geo2",
            question:
              "Sometimes you have to combine different clues to paint a fuller picture.",
            answer: "Thailand",
            successMessage:
              "This is where a good foundational knowledge of world geography comes in handy. Knowing that Bangkok is the capital of Thailand or recognizing Thai script can make the difference.",
            failMessage:
              "This is where a good foundational knowledge of world geography comes in handy. Knowing that Bangkok is the capital of Thailand or recognizing Thai script can make the difference.",
          }}
        />
      </HobbyImage>
      <Divider />
      <HobbyImage
        image={{
          src: "/hobbies/geography/geoguessr-quiz-3.png",
        }}
      >
        <QuestionPrompt
          questionPrompt={{
            id: "geo3",
            question:
              "There is not much given here but some keen observations can narrow down the options.",
            answer: "Chile",
            successMessage:
              "Well done! The combination of the Spanish language and the Snow Peaked mountains in the distance will clue in seasoned players that we are in Chile along the Andes Mountain Range. Few other spanish speaking countries share this cold, mountainous landscape.",
            failMessage:
              "That was a hard one. The combination of the Spanish language and the Snow Peaked mountains in the distance could clue in players that we are in Chile along the Andes Mountain Range. Few other spanish speaking countries share this cold, mountainous landscape.",
          }}
        />
      </HobbyImage>
      <Divider />
      <HobbyImage
        image={{
          src: "/hobbies/geography/geoguessr-quiz-4.png",
        }}
      >
        <QuestionPrompt
          questionPrompt={{
            id: "geo4",
            question: "What about this one?",
            answer: "Japan",
            successMessage:
              "Good job! In this image the Japanese Streetsigns and unique thatched roofs can help with identification but a 3rd less obvious clue is the left hand drive. Fewer countries globally drive on the left so they are good to know. Some examples include the U.K., Australia, and Japan.",
            failMessage:
              "In this image the Japanese Streetsigns and unique thatched roofs can help with identification but a 3rd less obvious clue is the left hand drive. Fewer countries globally drive on the left so they are good to know. Some examples include the U.K., Australia, and Japan.",
          }}
        />
      </HobbyImage>
      <Divider />
      <HobbyImage
        image={{
          src: "/hobbies/geography/geoguessr-quiz-5.png",
        }}
      >
        <QuestionPrompt
          questionPrompt={{
            id: "geo5",
            question:
              "There are no signs in in this one. We need to instead look at the trees (or lack of) and climate.",
            answer: "Iceland",
            successMessage:
              "Impressive! Located at the edge of the Arctic Circle, trees in Iceland are sparce and low lying. The country has a distinct 'Edge of the Earth' feeling and is one that I am eager to visit.",
            failMessage:
              "A hard one, but Iceland has some unique identifiers to look out for. Located at the edge of the Arctic Circle, trees in Iceland are sparce and low lying. The country has a distinct 'Edge of the Earth' feeling and is one that I am eager to visit.",
          }}
        />
      </HobbyImage>
      <Divider />
      <Text pb={5}>
        If you enjoyed this quiz, check out{" "}
        <Link color={"blue.500"} href="/#Projects">
          GeoPro
        </Link>{" "}
        or find my Geoguessr account in the{" "}
        <Link color={"blue.500"} href="/#Connect">
          Connect
        </Link>{" "}
        section and join me for some friendly competition. I am always up for a
        challenge!
      </Text>
    </Box>
  );
}
