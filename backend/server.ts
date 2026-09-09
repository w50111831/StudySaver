import "dotenv/config";
import Fastify from "fastify";
import cors from "@fastify/cors";
import { connectToDatabase, getDb} from "./db.js"


const app = Fastify({
  logger: true,
});

await app.register(cors, {
  origin: "http://localhost:5173",
});


app.get("/api/hello", async() => {
  return {
    status: "works!",
    message: "HELLO WORLD",
  }
});

app.get("/api/study-plans", async () => {
  return {
    plans: [
      {
        id: 1,
        title: "Mathematics plan",
        description: "Plan for studying mathematics",
      },
      {
        id: 2,
        title: "Computer science plan",
        description: "Do hackathon project",
      }
    ]
  }
});

app.get("/api/test-db", async () => {
  const db = getDb();

  const result = await db.command({
    ping: 1,
  })
  return {
    database: "connected",
    result,
  };
});

await connectToDatabase();

app.listen({
  port: 3000,
  host: "0.0.0.0",
});