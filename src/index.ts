import Fastify from "fastify";
import cors from "@fastify/cors";
import { registerRoutes } from "./routes";
import { config } from "./config";

const PORT = config.PORT;
const HOST = config.HOST;

function buildServer() {
  const fastify = Fastify({ logger: true });

  const CORS_ORIGIN = (config.CORS_ORIGIN || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  fastify.register(cors, {
    origin: (origin, cb) => {
      if (!origin) return cb(null, true);
      if (CORS_ORIGIN.includes(origin)) return cb(null, true);
      cb(new Error("Not allowed by CORS"), false);
    },
  });

  registerRoutes(fastify);

  return fastify;
}

const start = async () => {
  const fastify = buildServer();
  try {
    await fastify.listen({ port: Number(PORT), host: HOST });
    fastify.log.info(`Server listening`);
  } catch (err) {
    fastify.log.error(err as Error);
    process.exit(1);
  }
};

start();
