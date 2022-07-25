import express from "express";
import { generateLoginLink } from "../controllers/AuthController";
const authRouter = express.Router();

authRouter.get("/login", generateLoginLink);

export { authRouter };
