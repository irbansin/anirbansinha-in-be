import Fastify from "fastify";
import dotenv from "dotenv";
import cors from "@fastify/cors";

dotenv.config();

const fastify = Fastify({ logger: true });

const PORT = process.env.PORT || 3000;
const HOST =
  process.env.HOST ||
  (process.env.NODE_ENV === "production" ? "0.0.0.0" : "127.0.0.1");
// CORS setup
const CORS_ORIGIN = (process.env.CORS_ORIGIN || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

fastify.register(cors, {
  origin: (origin, cb) => {
    // allow non-browser tools (curl, server-to-server) when origin is undefined
    if (!origin) return cb(null, true);
    // if no whitelist defined, allow all (dev / simple setup)
    // if (CORS_ORIGIN.length === 0) return cb(null, true);
    // allow if origin is in whitelist
    if (CORS_ORIGIN.includes(origin)) return cb(null, true);
    // otherwise block
    cb(new Error("Not allowed by CORS"), false);
  },
});

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

fastify.get("/health", async (request, reply) => {
  
  const body = {
    status: "ok",
    uptime: process.uptime(),
    node: process.version,
    timestamp: new Date().toISOString(),
  };
  return reply.code(200).send(body);
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
