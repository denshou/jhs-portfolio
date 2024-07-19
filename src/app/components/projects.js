import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div className="section-5">
        <div className="section-fifth">
          <p className="section-title">PROJECTS</p>
          <div className="pj-container">
            <p className="pj-title">NUWA(실시간 협업툴)</p>
            <p className="pj-span">2024.01~2024.04(7인 프로젝트)</p>
            <div className="pj-detail">
              <div className="pj-img">
                <img src="/nuwa1.png" alt="" />
              </div>
              <div className="pj-description">
                <p className="main-des">
                  실시간으로 소통할 수 있는 협업툴입니다. 기존 앱들과는 다르게
                  필요한 기능만을 사용해 간편하게 이용할 수 있도록 개발했습니다.
                </p>
                <div className="sub-des">
                  <div className="label">주요 기능</div>
                  <div className="value">
                    <p>
                      워크스페이스를 생성하고 초대링크 생성 및 이메일로
                      전송합니다.
                    </p>
                    <p>
                      1:1 채팅, 그룹 채팅이 실시간으로 가능하고 SSE를 통해
                      알림이 전송됩니다.
                    </p>
                    <p> 채팅 별 이미지, 파일 업로드가 가능합니다.</p>
                    <p>
                      메세지의 마지막 시간에 따라 채팅방 조회가 가능하고 내가
                      보낸 메세지 수가 많은 인원을 대쉬보드에서 보여줍니다.
                    </p>
                  </div>
                </div>
                <div className="sub-des">
                  <div className="label">GitHub</div>
                  <Link href={"https://github.com/NU-WA-Project"}>github.com/NU-WA-Project</Link>
                </div>
                <div className="sub-des">
                  <div className="label">URL</div>
                  <Link href={"https://nu-wa.online"}>nu-wa.online</Link>
                </div>
                <div className="hash">
                  <p>#React #MongoDB #mySQL #ChakraUI </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pj-container">
            <p className="pj-title">SunflowerPlate</p>
            <p className="pj-span">2023.10~2023.11(9인 프로젝트)</p>
            <div className="pj-detail">
              <div className="pj-img">
                <img src="/nuwa1.png" alt="" />
              </div>
              <div className="pj-description">
                <div className="sub-des">
                  <div className="label">주요 기능</div>
                  <div className="value">
                    <p>
                      사용자들이 음식 경험을 기록하고 공유할 수 있는 플랫폼으로,
                      다양한 음식점을 발견하고 추천받을 수 있는 곳입니다.
                    </p>
                    <p>
                      사용자들에게 신뢰할 수 있는 리뷰, 메뉴 및 가격 정보,
                      식당의 위치 및 운영 시간 등을 제공하여 식사 결정에 도움을
                      줄 수 있습니다
                    </p>
                    <p>
                      여러 맛집이 지역별, 유형별로 분류되어 있어, 식당을 방문한
                      사용자들은 자신의 경험을 공유하고, 별점과 함께 리뷰를 남길
                      수 있습니다.
                    </p>
                  </div>
                </div>
                <div className="sub-des">
                  <div className="label">GitHub</div>
                  <Link href={"https://github.com/20231016-3rd-project"}>github.com/20231016-3rd-project</Link>
                </div>
                <div className="hash">
                  <p>#React #typescript #Redux Toolkit #mySQL #SPRING </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
