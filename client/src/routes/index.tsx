import { createBrowserRouter } from "react-router-dom";

import { Authentication, Home } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/auth",
        element: <Authentication />
    }
]);