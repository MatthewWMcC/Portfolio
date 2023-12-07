import { Container } from "@chakra-ui/react";
import Landing from "./sections/landing";
import Projects from "./sections/projects";
import Hobbies from "./sections/hobbies";
import Divider from "./components/divider";
import Connect from "./sections/connect";
import AboutMe from "./sections/about-me";
import NavBar from "./components/nav-bar";

export default function Home() {
  return (
    <Container maxW="container.xl" padding={{ base: 6, sm: 8 }}>
      <Landing />
      <Divider />
      <AboutMe />
      <Divider />
      <Projects />
      <Divider />
      <Hobbies />
      <Divider />
      <Connect />
    </Container>
  );
}
