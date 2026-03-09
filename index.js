import Fastify from "fastify";
import { userInfo } from "node:os";

const fastify = Fastify({ logger: true });

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
    await fastify.listen({ port: 3000 });
    console.log("Server running at http://localhost:3000/");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
