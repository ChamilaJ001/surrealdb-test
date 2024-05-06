import { Surreal } from "surrealdb.node";

const db = new Surreal();

async function main() {
  try {
    // Connect to the database
    await db.connect("ws://127.0.0.1:8000");

    // Signin as a namespace, database, or root user
    await db.signin({
      username: "root",
      password: "root",
    });

    // Select a specific namespace / database
    await db.use({ ns: "example", db: "example" });
  } catch (e) {
    console.error("ERROR", e);
  }
}

export { db, main };
