import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  mongoUri:
    process.env.MONGO_DB_URL || "mongodb://localhost:27017/express-mongo",
};