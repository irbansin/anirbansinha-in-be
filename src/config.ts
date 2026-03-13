import dotenv from "dotenv";

dotenv.config();

export const config = {
  PORT: process.env.PORT || "3000",
  HOST:
    process.env.HOST ||
    (process.env.NODE_ENV === "production" ? "0.0.0.0" : "127.0.0.1"),
  CORS_ORIGIN: process.env.CORS_ORIGIN || "",
  NETLIFY_TOKEN: process.env.NETLIFY_TOKEN || "",
};
