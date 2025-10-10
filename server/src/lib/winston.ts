import winston from "winston";

import config from "@/config";

const { combine, timestamp, json, errors, align, printf, colorize } =
    winston.format;

// Define the transport array to hold different logging transports.
const transports: winston.transport[] = [];

// If the application is not running in production, add a console transport
if (config.NODE_ENV !== "production") {
    transports.push(
        new winston.transports.Console({
            format: combine(
                colorize({ all: true }), // Add colors to log levels
                timestamp({ format: "YYYY-MM-DD HH:mm:ss A" }), // Add timestamp to logs
                align(), // Align log messages
                printf(({ timestamp, level, message, ...meta }) => {
                    const metaStr = Object.keys.length
                        ? `\n${JSON.stringify(meta)}`
                        : "";

                    return `${timestamp} [${level.toUpperCase()}]: ${message}${metaStr}`;
                })
            ),
        })
    );
}

// Create a logger instance using Winston
const logger = winston.createLogger({
    level: config.LOG_LEVEL || "info", // Set the default logging level
    format: combine(timestamp(), errors({ stack: true }), json()), // Use JSON format the log messages.
    transports,
    silent: config.NODE_ENV === "test", // Disable logging in test environment.
});

export { logger };
