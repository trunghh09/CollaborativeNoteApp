import dotenv from "dotenv";
import type { CorsOptions } from "cors";

dotenv.config();

const config = {
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV,
    WHITELIST_ORIGINS: ["https://localhost:5173"],
};

export default config;

export const corsOptions: CorsOptions = {
    origin(origin, callback) {
        if (
            config.NODE_ENV === "development" ||
            !origin ||
            config.WHITELIST_ORIGINS.includes(origin)
        ) {
            callback(null, true);
        } else {
            // TODO Reject requests from non-whitelist origins
            callback(
                new Error(`CORS error: ${origin} is not allowed by CORS`),
                false
            );
            console.log(`CORS error: ${origin} is not allowed by CORS`);
        }
    },
};
