import { Application } from "express";

import config from "@/config";
import { default as AuthRoutesV1 } from "./v1/auth";

const serverRoutes = (app: Application) => {
    /**
     * * Health check endpoint
     */
    app.get("/health", (req, res) => {
        res.status(200).json({
            status: "ok",
            uptime: process.uptime(),
            environment: config.NODE_ENV,
        });
    });

    /**
     * * Application endpoint
     */
    app.use("/api/v1", AuthRoutesV1);
};

export default serverRoutes;
