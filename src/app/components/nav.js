'use client';

import { handleScroll } from "utils/handleScroll";
import ArrowUp from "/public/arrow-up.svg";

export default function Nav() {

  return (
    <>
      <div className="navigation">
        <div className="nav-bar">
          <div className="nav">
            <ul className="nav-ul">
              <li className="nav-li" onClick={() => handleScroll("home")}>Home</li>
              <li className="nav-li" onClick={() => handleScroll("about")}>About me</li>
              <li className="nav-li" onClick={() => handleScroll("skills")}>Skills</li>
              <li className="nav-li" onClick={() => handleScroll("archive")}>Archive</li>
              <li className="nav-li" onClick={() => handleScroll("projects")}>Projects</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="page-up-btn">
        <ArrowUp width='2rem' height='2rem'/>
      </div> */}
    </>
  );
}
