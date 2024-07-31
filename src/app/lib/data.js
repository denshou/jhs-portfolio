import { sql } from "@vercel/postgres";

export async function fetchProjects() {
  try {
    const projectPromise = await sql`SELECT * FROM Projects`;

    // const data = projectPromise.rows;

    return projectPromise;
  } catch (error) {
    console.error("Database Error", error);
    throw new Error("Failed to fetch data");
  }
}
