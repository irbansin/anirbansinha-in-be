import { FastifyReply, FastifyRequest } from "fastify";

export const healthHandler = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  const body = {
    status: "ok",
    uptime: process.uptime(),
    node: process.version,
    timestamp: new Date().toISOString(),
  };
  return reply.code(200).send(body);
};
