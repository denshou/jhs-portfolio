import BlogIcon from "/public/blog.svg";

export default function Archive() {
    return (
      <>
      <div className="section-4">
        <div className="section-fourth">
          <p className="section-title">ARCHIVE</p>
          <div className="wrapper">
            <div className="archive-container">
              <img src="/github.jpg" alt="" />
              <p>github.com/denshou</p>
              <p>소스 코드 저장소입니다.</p>
            </div>
            <div className="archive-container">
              <BlogIcon width="100px" height="100px" />
              <p>blog.naver.com/zecaumr</p>
              <p>공부 및 지식 공유 목적의 블로그입니다.</p>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }