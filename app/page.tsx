import { Container } from "@chakra-ui/react";
import Landing from "./sections/landing";
import Projects from "./sections/projects";
import Passions from "./sections/passions";
import Divider from "./components/divider";
import Connect from "./sections/connect";
import AboutMe from "./sections/about-me";
import NavBar from "./components/nav-bar";

export default function Home() {
  return (
    <Container maxW="container.xl" padding={8}>
      <Landing />
      <Divider />
      <AboutMe />
      <Divider />
      <Projects />
      <Divider />
      <Passions />
      <Divider />
      <Connect />
    </Container>
  );
}
