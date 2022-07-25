import express from "express";
import { getLoginLink } from "../lib/Zoho/ZohoLib";

const generateLoginLink = (req: express.Request, res: express.Response) => {
    const link = getLoginLink();
    res.status(200);
    res.send({ link });
};

export { generateLoginLink };
