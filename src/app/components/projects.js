import Link from "next/link";
import Carousel from "./carousel";

import { sql } from "@vercel/postgres";

export default async function Projects({ params }) {
  const { rows } = await sql`SELECT * from projectlist`;

  console.log(rows);

  return (
    <>
      <div className="section-5">
        <div className="container2">
          <p className="section-title">PROJECTS</p>
          {rows.map((project) => {
            // description을 '.'으로 나누어 배열로 만듭니다.
            const descriptionParts = project.description
              .split(".")
              .map((part) => part.trim()) // 각 부분의 앞뒤 공백을 제거합니다.
              .filter((part) => part.length > 0); // 빈 문자열을 필터링합니다.

            return (
              <div key={project.id} className="pj-container">
                <p className="pj-title">{project.title}</p>
                <p className="pj-span">{project.period}</p>
                <div className="pj-detail">
                  <div className="pj-img">
                    <Carousel images={project.images} />
                  </div>
                  <div className="pj-description">
                    <p className="main-des">{project.summary}</p>
                    <div className="sub-des">
                      <div className="label">주요 기능</div>
                      <div className="value">
                        {descriptionParts.map((part, index) => (
                          <p key={index}>{part}.</p> // 각 부분을 <p> 태그로 감싸고 마침표를 추가합니다.
                        ))}
                      </div>
                    </div>
                    <div className="sub-des">
                      <div className="label">GitHub</div>
                      <Link href={project.githublink}>
                        {project.githublink.replace("https://", "")}
                      </Link>
                    </div>
                    <div className="sub-des">
                      {project.pagelink && (
                        <>
                          <div className="label">URL</div>
                          <Link href={project.pagelink}>
                            {project.pagelink.replace("https://", "")}
                          </Link>
                        </>
                      )}
                    </div>
                    <div className="hash">
                      <p>{project.hash}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
