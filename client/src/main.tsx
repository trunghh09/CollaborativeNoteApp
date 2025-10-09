import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// TODO: Import google auth provider from library
import { GoogleOAuthProvider } from "@react-oauth/google";

// TODO: Import router of application
import { router } from "./routes";

// TODO: Import main file css
import "./index.css";

const ggClientID = import.meta.env.VITE_GG_CLIENT_ID;

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <GoogleOAuthProvider clientId={ggClientID}>
            <RouterProvider router={router} />
        </GoogleOAuthProvider>
    </StrictMode>
);
