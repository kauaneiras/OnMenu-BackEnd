import { Pool, PoolConfig } from "pg";
import dotenv from "dotenv";

dotenv.config();

const configDatabase: PoolConfig = {
  connectionString: process.env.DATABASE_URL,
};

if (process.env.NODE_ENV === "production") {
  configDatabase.ssl = {
    rejectUnauthorized: false,
  };
}

export const db = new Pool(configDatabase);
