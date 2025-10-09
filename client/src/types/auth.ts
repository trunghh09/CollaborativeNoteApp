import { type TokenResponse } from "@react-oauth/google";

export type GoogleTokenResponseType = Omit<TokenResponse, "error" | "error_description" | "error_uri">;