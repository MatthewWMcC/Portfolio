import { Container } from "@chakra-ui/react";
import styles from "./styles/page.module.css";
import Landing from "./components/landing";
import Projects from "./components/projects";
import Passions from "./components/passions";
import Divider from "./components/divider";

export default function Home() {
  return (
    <>
      <Container maxW="container.xl" padding={8}>
        <Landing />
        <Divider />
        <Projects />
        <Divider />
        <Passions />
      </Container>
    </>
  );
}
