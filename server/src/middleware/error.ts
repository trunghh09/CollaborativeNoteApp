import { NextFunction, Request, Response } from "express";

import { getErrorMessage } from "@/utils";
import CustomError from "@/errors";

export const errorHandler = (
    error: unknown,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (error instanceof CustomError) {
        res.status(error.statusCode).json({
            error: {
                message: error.message,
                code: error.code,
            },
        });
        return;
    }

    res.status(500).json({
        error: {
            message:
                getErrorMessage(error) ||
                "An error occurred. Please view logs for more details.",
        },
    });
};
