import { language, passionProps, projectProps } from "./types";
import { IoMdGlobe } from "react-icons/io";
import { MdKayaking } from "react-icons/md";

export const languageColorMap: Record<language, string> = {
  [language.JS]: "yellow",
  [language.CSS]: "blue",
  [language.GCP]: "orange",
  [language.NODE]: "green",
  [language.SOCKET]: "grey",
  [language.TS]: "blue",
  [language.SASS]: "pink",
  [language.BOOT]: "purple",
  [language.GRAPH]: "pink",
  [language.NATIVE]: "cyan",
  [language.REACT]: "teal",
  [language.REDUX]: "purple",
  [language.WEBPACK]: "blue",
  [language.PRISMA]: "grey",
  [language.MONGO]: "green",
};

export const navLinks = [
  { title: "About", linkTo: "/#About" },
  { title: "Projects", linkTo: "/#Projects" },
  { title: "Passions", linkTo: "/#Passions" },
  { title: "Connect", linkTo: "/#Connect" },
  { title: "Resume", linkTo: "/resume" },
];

export const projects: projectProps[] = [
  {
    id: "geopro",
    title: "GeoPro",
    description:
      "Real-time multiplayer game where friends can compete based on their geography knowledge. Includes various gamemodes with mapbox integration. Try out City Guesser to see if you can pinpoint the worlds largest cities!",
    image: "./projects/geopro-logo.png",
    languages: [language.TS, language.SOCKET, language.GCP, language.REDUX],
    githubLink: "https://github.com/MatthewWMcC/GeoPro",
    liveLink: "https://geopro.herokuapp.com/",
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
  },
  {
    id: "storytime",
    title: "StoryTime",
    description:
      "A MERN-stack application allowing users to track and share their reading habits. Users can share their thoughts on specific chapters and comment on on and like other users insights in real time.",
    image: "./projects/storytime-logo.png",
    languages: [language.JS, language.REACT, language.BOOT, language.MONGO],
    githubLink: "https://github.com/MatthewWMcC/StoryTime",
  },
  {
    id: "olympian",
    title: "Olympian",
    description:
      "A React Native application for users to explore new workout routines as posted by the public. Users can search and sort workouts based on their goals and create their own content for the public to discover.",
    image: "./projects/olympian-logo.png",
    languages: [language.GRAPH, language.NATIVE, language.PRISMA],
    githubLink: "https://github.com/MatthewWMcC/olympian-capstone",
  },
];

export const passions: passionProps[] = [
  {
    id: "geography",
    title: "Geography",
    icon: IoMdGlobe,
    description:
      'As a general Geography nerd, I enjoy Vexillology, Cartography, and the Anthropology associated with learning about different cultures. "How did a peoples physical environment impact their history?" is a question that fascinates me.',
    images: [
      {
        image: "./passions/hondio-wall-map.png",
        annotation:
          'Henricus Hondius\' decorative world map from 1641 shows gorgeous artwork and cartographic misconceptions from the time. Noteable elements include showing California as an island, the incomplete northwestern landmass of the Americas, and a faint view of the mythical "Unknown Southern Land" marked as Terra Australis which really just shows the enlarged northern coastline of Australia. I was gifted a poster version of this map and it is a personal favorite.',
      },
      {
        image: "./passions/geoguessr-view.png",
        annotation:
          "I am an avid Geoguessr player. In Geoguessr, players explore random Google Street View locations to pinpoint their exact whereabouts. Players can use clues such as the local language, architecture, physical geography, and even license plates to geolocate themselves. The game is a fun and engaging way to broaden my knowledge of other countries.",
      },
      {
        image: "./passions/geoguessr-master.png",
        annotation:
          "In Geoguessr, players can compete against each other to pinpoint various locations with more accuracy. There are large leagues and tournaments where expert Geoguessr's compete to show off their skill. This is the section where I humble brag by showing off that I am in the master division although if I am being honest I frequently oscillate between the gold and master divisions.",
      },
    ],
  },
  {
    id: "kayaking",
    title: "Kayaking",
    icon: MdKayaking,
    description: "Kayaking Description",
    images: [
      {
        image: "./passions/geoguessr-master.png",
        annotation: "I am an avid Geoguessr player...",
      },
    ],
  },
];
