import { Router } from "express";

const router = Router();

/**
 * TODO: Define routes
 */
router.get("/auth", (req, res) => {
    res.json({
        message: "Hello world!"
    })
});

export default router;