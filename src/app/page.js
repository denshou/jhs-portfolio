import Image from "next/image";
import { Noto_Sans_KR } from "next/font/google";

const Noto = Noto_Sans_KR({
  subsets: ["latin"],
});

import Nav from "./components/nav";
import Masthead from "./components/masthead";
import About from "./components/about";
import Skills from "./components/skills";
import Archive from "./components/archive";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div className={`${Noto.className}`}>
      <Nav />
      <div id="home"><Masthead /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="archive"><Archive /></div>
      <div id="projects"><Projects /></div>
      <div>
        <p>footer</p>
      </div>
    </div>
  );
}
