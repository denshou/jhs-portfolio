// node -r dotenv/config ./scripts/seed.js

const { db } = require("@vercel/postgres");
const { v4: uuidv4 } = require("uuid");

const Projects = [
  {
    id: uuidv4(),
    title: "NUWA",
    period: "2024.01~2024.04(7인 프로젝트)",
    images: [
      "/nuwa/nuwa1.png",
      "/nuwa/nuwa2.png",
      "/nuwa/nuwa3.png",
      "/nuwa/nuwa4.png",
    ],
    summary:
      "실시간으로 소통할 수 있는 협업툴입니다. 기존 앱들과는 다르게 필요한 기능만을 사용해 간편하게 이용할 수 있도록 개발했습니다.",
    description:
      "워크스페이스를 생성하고 초대링크 생성 및 이메일로 전송합니다.채팅 별 이미지, 파일 업로드가 가능합니다.메세지의 마지막 시간에 따라 채팅방 조회가 가능하고 내가 보낸 메세지 수가 많은 인원을 대쉬보드에서 보여줍니다.",
    githubLink: "https://github.com/NU-WA-Project",
    pageLink: "https://nu-wa.online",
    hash: "#React #MongoDB #mySQL #ChakraUI",
  },
  {
    id: uuidv4(),
    title: "SunflowerPlate",
    period: "2023.10~2023.11(9인 프로젝트)",
    images: ["/sf/sf1.png", "/sf/sf2.png", "/sf/sf3.png"],
    summary:
      "사용자들이 음식 경험을 기록하고 공유할 수 있는 플랫폼으로, 다양한 음식점을 발견하고 추천받을 수 있는 곳입니다.",
    description:
      "사용자들에게 신뢰할 수 있는 리뷰, 메뉴 및 가격 정보, 식당의 위치 및 운영 시간 등을 제공하여 식사 결정에 도움을 줄 수 있습니다. 여러 맛집이 지역별, 유형별로 분류되어 있어, 식당을 방문한 사용자들은 자신의 경험을 공유하고, 별점과 함께 리뷰를 남길 수 있습니다.",
    githubLink: "https://github.com/20231016-3rd-project",
    pageLink: "",
    hash: "#React #typescript #Redux Toolkit #mySQL #SPRING #aws",
  },
];

async function seedProjects(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    await client.sql`DROP TABLE IF EXISTS projectlist`;

    // Create the "Projects" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE projectlist (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        period VARCHAR(255) NOT NULL,
        images VARCHAR(255) NOT NULL,
        summary VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        githubLink VARCHAR(255) NOT NULL,
        pageLink VARCHAR(255),
        hash VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "projectlist" table`);

    // Insert data into the "projectlist" table
    const insertedProjects = await Promise.all(
      Projects.map(
        (project) => client.sql`
        INSERT INTO projectlist (id, title, period, images, summary, description, githubLink, pageLink, hash)
        VALUES (${project.id}, ${project.title}, ${project.period}, ${project.images}, ${project.summary}, ${project.description}, ${project.githubLink}, ${project.pageLink}, ${project.hash})
        ON CONFLICT (id) DO NOTHING;
      `
      )
    );

    console.log(`Seeded ${insertedProjects.length} projects`);

    return {
      createTable,
      Projects: insertedProjects,
    };
  } catch (error) {
    console.error("Error seeding projects:", error);
    throw error;
  } finally {
    await client.end(); // 데이터베이스 연결 종료
  }
}

async function main() {
  console.log("main function is run");
  const client = await db.connect();

  await seedProjects(client);
}

main().catch((err) => {
  console.error("An error occured while attempting to seed the database", err);
});
