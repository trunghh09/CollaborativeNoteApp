import dotenv from "dotenv";

dotenv.config();

const config = {
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV,
    WHITELIST_ORIGINS: ["https://localhost:5173"],
    LOG_LEVEL: process.env.LOG_LEVEL || "info",
    GG_CLIENT_ID: process.env.GG_CLIENT_ID,
};

export default config;
