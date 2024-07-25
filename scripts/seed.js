// node -r dotenv/config ./scripts/seed.js

const { db } = require("@vercel/postgres");
const { v4: uuidv4 } = require("uuid");

const Projects = [
  {
    id: uuidv4(),
    title: "NUWA",
    images: ["/nuwa/nuwa1.png", "/nuwa/nuwa2.png"],
  },
  {
    id: uuidv4(),
    title: "SunflowerPlate",
    images: ["/sf/sf1.png", "/sf/sf2.png"],
  },
];

async function seedProjects(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "Projects" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS Projects (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        images VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "Projects" table`);

    // Insert data into the "Projects" table
    const insertedProjects = await Promise.all(
      Projects.map(
        (project) => client.sql`
        INSERT INTO Projects (id, title, images)
        VALUES (${project.id}, ${project.title}, ${project.images})
        ON CONFLICT (id) DO NOTHING;
      `
      )
    );

    console.log(`Seeded ${insertedProjects.length} Projects`);

    return {
      createTable,
      Projects: insertedProjects,
    };
  } catch (error) {
    console.error("Error seeding Projects:", error);
    throw error;
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
