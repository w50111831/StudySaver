import Fastify from "fastify";
import cors from "@fastify/cors";

const app = Fastify({
  logger: true,
});

await app.register(cors, {
  origin: "http://localhost:5173",
});

//Auth routes

app.post("/api/auth/sign-up", async() => {
  return {
    dummy: "sign-up route works",
  }
})

app.post("/api/auth/sign-in", async() => {
  return {
    dummy: "sign-in route works",
  }
})

app.post("/api/auth/sign-out", async() => {
  return {
    dummy: "sign-out route works",
  }
})

app.get("/api/hello", async() => {
  return {
    status: "works!",
    message: "HELLO WORLD",
  }
})

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
})

app.listen({
  port: 3000,
  host: "0.0.0.0",
});