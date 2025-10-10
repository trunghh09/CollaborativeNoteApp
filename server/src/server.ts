/**
 * * Node modules
 */
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import compression from "compression";
import helmet from "helmet";

import type { CorsOptions } from "cors";

/**
 * * Custom modules
 */
import config from "@/config";
import { limiter, logger } from "@/lib";
import serverRoutes from "@/routes";

/**
 * * Express app initial
 */
const app = express();

// TODO: Apply cors middleware.
const corsOptions: CorsOptions = {
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
            logger.warn(`CORS error: ${origin} is not allowed by CORS`);
        }
    },
};

app.use(cors(corsOptions));

// TODO: Enable JSON request body parsing.
app.use(express.json());

// TODO: Enable URL-encoded request body parsing with extended mode.
// * `extended: true` allows rich objects and arrays via querystring library.
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// TODO: Enable response compression to reduce payload size and improve performance
app.use(
    compression({
        threshold: 1024, // Only compress response larger than 1KB
    })
);

// TODO: Use helmet to enhance security by setting various HTTP headers.
app.use(helmet());

// TODO: Apply rate limitting middleware to prevent excessive requests and enhance security.
app.use(limiter);

/**
 * Immediately Invoked Async Function Expression (IIFE) to start the server.
 *
 * - Tries to connect to the database before initializing the server.
 * - Define the API route (`/api/v1`).
 * - Starts the server on the specified PORT and logs running URL.
 * - If an error occurs during startup, it is logged and the process exits with status 1.
 */
(async () => {
    try {
        // TODO: Enable routes
        serverRoutes(app);

        app.listen(config.PORT, () => {
            logger.info(`Server is running on port ${config.PORT}`);
        });
    } catch (err) {
        logger.error("Failed to start the server", err);

        if (config.NODE_ENV === "production") {
            process.exit(1);
        }
    }
})();

/**
 * Handles server shutdown gracefully by disconnecting from the database.
 *
 * - Attempts to disconnect from the database before shutting down the server.
 * - Logs a success message if the disconnection is successful.
 * - If an error occurs during disconnection, it is logged to the console.
 * - Exists the process with status code `0` (indicating a successful shutdown).
 */
const handleServerShutdown = async () => {
    try {
        logger.warn("Server SHUTDOWN");
        process.exit(0);
    } catch (err) {
        logger.error("Error during server shutdown", err);
    }
};

/**
 * Listens for termination signals (`SIGTERM` and `SIGINT`).
 *
 * - `SIGTERM` is typically sent when stopping a process (e.g., `kill` command or container shutdown).
 * - `SIGINT` is triggered when the user interrupts the process (e.g., pressing `Ctrl + C`).
 * - When either signal is received, `handleServerShutdown` is executed to ensure proper cleanup.
 */
process.on("SIGTERM", handleServerShutdown);
process.on("SIGINT", handleServerShutdown);
