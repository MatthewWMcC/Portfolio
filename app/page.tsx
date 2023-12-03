import { Container } from "@chakra-ui/react";
import styles from "./styles/page.module.css";
import Landing from "./sections/landing";
import Projects from "./sections/projects";
import Passions from "./sections/passions";
import Divider from "./components/divider";
import Connect from "./sections/connect";
import Resume from "./sections/resume";
import AboutMe from "./sections/about-me";

export default function Home() {
  return (
    <>
      <Container maxW="container.xl" padding={8}>
        <Landing />
        <Divider />
        <AboutMe />
        <Divider />
        <Projects />
        <Divider />
        <Passions />
        <Divider />
        <Resume />
        <Divider />
        <Connect />
      </Container>
    </>
  );
}
