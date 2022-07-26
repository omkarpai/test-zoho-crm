import express from "express";
import { generateLoginLink, getAccessToken } from "../controllers/AuthController";
const authRouter = express.Router();

authRouter.get("/login", generateLoginLink);
authRouter.get("/access-token", getAccessToken);

export { authRouter };
