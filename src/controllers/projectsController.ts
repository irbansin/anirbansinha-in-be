import { FastifyReply, FastifyRequest } from "fastify";
import { getNetlifySites } from "../services/netlifyService";
import { config } from "../config";

export const projectsHandler = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  const NETLIFY_TOKEN = config.NETLIFY_TOKEN;
  if (!NETLIFY_TOKEN) {
    request.log.error("NETLIFY_TOKEN not configured");
    return reply.code(500).send({ error: "NETLIFY_TOKEN not configured" });
  }

  try {
    const data = await getNetlifySites(NETLIFY_TOKEN);
    return reply.code(200).send(data);
  } catch (err: unknown) {
    request.log.error(err as Error);
    return reply
      .code(502)
      .send({ error: (err as Error)?.message || "Failed to fetch projects" });
  }
};
