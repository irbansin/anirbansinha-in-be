import Fastify from "fastify";
import dotenv from "dotenv";
dotenv.config();

const fastify = Fastify({ logger: true });

const PORT = process.env.PORT || 3000;
const HOST =
  process.env.HOST ||
  (process.env.NODE_ENV === "production" ? "0.0.0.0" : "127.0.0.1");

// 1. A simple GET endpoint (Reading data)
fastify.get("/api/v1/greet", async (request, reply) => {
  return { message: "Welcome to your first API endpoint!" };
});

// 2. A POST endpoint (Sending data to the server)
fastify.post("/api/v1/echo", async (request, reply) => {
  const { name } = request.body;
  return { message: `Hello, ${name}! Data received.` };
});

fastify.get("/api/v1/resume-details", async (request, reply) => {
  console.log(request);
  return {
    message: {
      userInfo: {
        name: "Anirban Sinha",
        jobTitle: "Software Development Engineer",
      },
    },
  };
});

// Start the server
const start = async () => {
  try {
    fastify.listen({ port: Number(PORT), host: HOST }).then((address) => {
      fastify.log.info(`Server listening at ${address}`);
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
