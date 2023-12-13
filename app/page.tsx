import { Container } from "@chakra-ui/react";
import Landing from "./sections/landing";
import Projects from "./sections/projects";
import Hobbies from "./sections/hobbies";
import Divider from "./components/divider";
import Connect from "./sections/connect";
import AboutMe from "./sections/about-me";
import Footer from "./components/footer";

export default function Home() {
  return (
    <Container
      maxW="container.lg"
      p={{ base: 6, sm: 6 }}
      pt={{ base: 0, sm: 0 }}
    >
      <Landing />
      <Divider />
      <AboutMe />
      <Divider />
      <Projects />
      <Divider />
      <Hobbies />
      <Divider />
      <Connect />
      <Divider />
      <Footer />
    </Container>
  );
}
