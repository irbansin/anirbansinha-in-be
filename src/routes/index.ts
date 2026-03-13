import { FastifyInstance } from "fastify";
import { projectsHandler } from "../controllers/projectsController";
import { resumeHandler } from "../controllers/resumeController";
import { healthHandler } from "../controllers/healthController";

export function registerRoutes(fastify: FastifyInstance) {
  fastify.get("/api/v1/projects", projectsHandler);
  fastify.get("/api/v1/resume-details", resumeHandler);
  fastify.get("/api/v1/health", healthHandler);
}
