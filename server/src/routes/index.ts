import { Application } from "express";

import { default as AuthRoutesV1 } from "./v1/auth";

const serverRoutes = (app: Application) => {
    app.use("/api/v1", AuthRoutesV1);
};

export default serverRoutes;