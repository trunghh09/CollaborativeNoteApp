import { Router } from "express";

import CustomError from "@/errors";

const router = Router();

/**
 * TODO: Define routes
 */
router.get("/auth", (req, res) => {
    throw new CustomError("Not implemented", 501, "NOT_IMPLEMENTED");

    res.json({
        message: "Hello world!",
    });
});

export default router;
