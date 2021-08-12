import { Container } from "@material-ui/core";

import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certs from "./components/Certs";
import FooterLinks from "./components/FooterLinks";

export default function App() {
  return (
    <Container className="App">
      <Intro />
      <Skills />
      <Projects />
      <Certs />
      <FooterLinks />
    </Container>
  );
}
