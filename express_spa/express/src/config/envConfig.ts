import dotenv from "dotenv";
import { cleanEnv, host, num, port, str, url } from "envalid";

dotenv.config();

export const env = cleanEnv(process.env, {
  NODE_ENV: str({ devDefault: "development", choices: ["development", "production", "test"] }),
  PORT: port({ devDefault: 8080 }),
  HOST: host({ devDefault: "localhost" }),
  CORS_ORIGIN: url({ devDefault: "http://localhost:3000" }),
  LOG_LEVEL: str({ devDefault: "info" }),
  API_DOCS_KEY: str({ devDefault: "" }),

  DB_HOST: host({ devDefault: "localhost" }),
  DB_USER: str({ devDefault: "root" }),
  DB_PASSWORD: str({ devDefault: "" }),
  DB_NAME: str({ devDefault: "" }),
  DB_PORT: port({ devDefault: 3306 }),

  JWT_SECRET: str({ devDefault: "" }),

  // Rate Limiter Configurations
  COMMON_RATE_LIMIT_MAX_REQUESTS: num({ devDefault: 100 }), // Max number of requests per window
  COMMON_RATE_LIMIT_WINDOW_MS: num({ devDefault: 15 * 60 * 1000 }), // Window duration in milliseconds
});
