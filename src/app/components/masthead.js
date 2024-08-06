import Image from "next/image";

export default function Masthead() {
  return (
    <>
      <div className="section-1" id="home">
        <div className="container1">
          <p className="masthead-title">프론트 엔드 개발자 포트폴리오</p>
          <hr className="masthead-hr" />
          <p className="masthead-detail">안녕하세요. </p>
          <p className="masthead-detail">프론트 엔드 개발자 정현승입니다.</p>
        </div>
        <div className="background">
          <Image
            src="/home-bg.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          ></Image>
        </div>
      </div>
    </>
  );
}
