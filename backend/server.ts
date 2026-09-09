import Fastify from "fastify";
import cors from "@fastify/cors";

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
})

app.listen({
  port: 3000,
  host: "0.0.0.0",
});