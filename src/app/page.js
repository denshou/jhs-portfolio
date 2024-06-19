import Image from "next/image";
import CssIcon from "../../public/css.svg";
import BlogIcon from "../../public/blog.svg";

export default function Home() {
  return (
    <>
      <div className="head">
        <div className="nav-bar">
          <p>JHS-Portfolio</p>
          <div className="nav">
            <p>About me</p>
            <p>Skills</p>
            <p>Archive</p>
            <p>Projects</p>
          </div>
        </div>
      </div>
      <div className="section-1">
        <div className="section-first">
          <p>프론트 엔드 개발자 포트폴리오</p>
          <hr />
          <p>안녕하세요. </p>
          <p>프론트 엔드 개발자 정현승입니다.</p>
        </div>
      </div>
      <div className="section-2">
        <div className="section-second">
          <p>ABOUT ME</p>
          <hr />
          <div className="wrap">
            <div className="wrap-content">
              <p>이름</p>
              <p>정현승</p>
            </div>
            <div className="wrap-content">
              <p>생년월일</p>
              <p>1998.09.01</p>
            </div>
            <div className="wrap-content">
              <p>주소지</p>
              <p>경기도 수원시</p>
            </div>
            <div className="wrap-content">
              <p>연락처</p>
              <p>010-2994-8697</p>
            </div>
            <div className="wrap-content">
              <p>이메일</p>
              <p>zecaumr@naver.com</p>
            </div>
            <div className="wrap-content">
              <p>학력</p>
              <p>세종대학교(전자정보통신공학과)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-3">
        <div className="section-third">
          <p>SKILLS</p>
          <div>
            <p>Frontend</p>
            <hr />
            <div>
              <img src="/HTML5.png" alt="" />
              <CssIcon width="100px" height="100px" />
              <img src="/js.png" alt="" />
              <img src="/sass.png" alt="" />
              <img src="/react.png" alt="" />
              <img src="/redux.png" alt="" />
              <img src="/next.png" alt="" />
              <img src="/bootstrap.png" alt="" />
              <img src="/tailwindcss.png" alt="" />
              <img src="/Vercel.png" alt="" />
              <img src="/netlify.png" alt="" />
              <img src="/git.png" alt="" />
              <img src="/github.jpg" alt="" />
              <img src="/firebase.png" alt="" />
              <BlogIcon width="100px" height="100px" />
            </div>
          </div>
        </div>
      </div>
      <div className="section-4">
        <div className="section-fourth">
          <p>ARCHIVE</p>
          <div className="wrapper">
            <div>
              <img src="/github.jpg" alt="" />
              <p>github.com</p>
              <p>소스 코드 저장소입니다.</p>
            </div>
            <div>
              <BlogIcon width="100px" height="100px" />
              <p>blog.com</p>
              <p>공부 및 지식 공유 목적의 블로그입니다.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-fifth">
        <p>PROJECTS</p>
        <div>
          <p>NUWA</p>
        </div>
      </div>
      <div>
        <p>footer</p>
      </div>
    </>
  );
}
