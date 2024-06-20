import Image from "next/image";

import Nav from "./components/nav";
import Masthead from "./components/masthead";
import About from "./components/about";
import Skills from "./components/skills";
import Archive from "./components/archive";
import Projects from "./components/projects";

export default function Home() {
  return (
    <>
      <Nav />
      <Masthead />
      <About />
      <Skills />
      <Archive />
      <Projects />
      <div>
        <p>footer</p>
      </div>
    </>
  );
}
