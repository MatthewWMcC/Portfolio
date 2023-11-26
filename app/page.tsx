import { Container, Divider, Flex } from "@chakra-ui/react";
import styles from "./styles/page.module.css";
import Landing from "./components/landing";
import Projects from "./components/projects";
import Passions from "./components/passions";

export default function Home() {
  return (
    <>
      <Container maxW="container.xl" padding={{ base: 5, md: 10 }}>
        <Landing />
        <Divider />
        <Projects />
        <Divider />
        <Passions />
      </Container>
    </>
  );
}
