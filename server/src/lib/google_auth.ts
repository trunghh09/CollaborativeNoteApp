import { OAuth2Client } from "google-auth-library";

import config from "@/config";

const ggClient = new OAuth2Client(config.GG_CLIENT_ID);

export const verifyGoogleToken = async (token: string) => {
    try {
        const ticket = await ggClient.verifyIdToken({
            idToken: token,
            audience: config.GG_CLIENT_ID,
        });

        const payload = ticket.getPayload();

        if (!payload) {
            // TODO: Handle error if not payload
        }

        return {
            email: payload?.email,
            fullName: payload?.family_name + " " + payload?.given_name,
            avatar: payload?.picture,
        };
    } catch (err) {
        // TODO: Handle error
    }
};
