import { language, projectProps } from "./types";

export const languageColorMap: Record<language, string> = {
  [language.JS]: "yellow",
  [language.CSS]: "blue",
  [language.GCP]: "orange",
  [language.NODE]: "green",
  [language.SOCKET]: "gray",
  [language.TS]: "blue",
  [language.SASS]: "pink",
  [language.BOOT]: "purple",
  [language.GRAPH]: "pink",
  [language.NATIVE]: "cyan",
  [language.REACT]: "blue",
  [language.REDUX]: "purple",
  [language.WEBPACK]: "blue",
  [language.MONGO]: "green",
  [language.NEXT]: "negative",
  [language.CHAKRA]: "teal",
};

export const navLinks = [
  { title: "About", linkTo: "/#About" },
  { title: "Projects", linkTo: "/#Projects" },
  { title: "Hobbies", linkTo: "/#Hobbies" },
  { title: "Connect", linkTo: "/#Connect" },
  { title: "Resume", linkTo: "/resume" },
];

export const projects: projectProps[] = [
  {
    id: "geopro",
    title: "GeoPro",
    description:
      "A Real-time multiplayer game where friends can compete based on their geography knowledge. Includes various game modes with mapbox integration. Try out City Guesser to see if you can pinpoint the world's largest cities!",
    image: "./projects/geopro-logo.svg",
    languages: [language.TS, language.SOCKET, language.GCP, language.REDUX],
    githubLink: "https://github.com/MatthewWMcC/GeoPro",
    // liveLink: "https://geopro.herokuapp.com/",
    bg: "green.700",
  },
  {
    id: "voyager-view",
    title: "Voyager View",
    description:
      "A responsive space Photo of the Day display using NASA API and a custom date selector. Users enjoy custom, out-of-this-world descriptions of astronomical photos and pick their favorites with a live liking feature.",
    image: "./projects/voyager-logo.png",
    languages: [language.SASS, language.NODE, language.WEBPACK],
    githubLink: "https://github.com/MatthewWMcC/Voyager-View",
    liveLink: "https://matthewwmcc.github.io/Voyager-View/",
    bg: "white",
  },
  {
    id: "storytime",
    title: "StoryTime",
    description:
      "A MERN-stack application allowing users to track and share their reading habits. Users can share their thoughts on specific chapters and comment on and like other users' insights in real-time.",
    image: "./projects/storytime-logo.svg",
    languages: [language.JS, language.REACT, language.BOOT, language.MONGO],
    githubLink: "https://github.com/MatthewWMcC/StoryTime",
    bg: "teal.200",
  },
  {
    id: "personal-portfolio",
    title: "Portfolio",
    description:
      "The site you are on right now! This site is responsive and WCAG 2 accessible and offers dark mode, some fun motion effects, and an interactive quiz.",
    image: "./images/portfolio-logo.svg",
    languages: [language.NEXT, language.CHAKRA, language.TS],
    githubLink: "https://github.com/MatthewWMcC/Portfolio",
    bg: "blue.300",
  },
];
