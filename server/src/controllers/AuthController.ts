import express, { Request, Response } from "express";
import { AccessGrant, getLoginLink, getZohoAccessToken } from "../lib/Zoho/ZohoLib";

const generateLoginLink = (req: Request, res: Response) => {
    const link = getLoginLink();
    res.status(200);
    res.send({ link });
};

const getAccessToken = async (req: Request, res: Response) => {
    const ag: AccessGrant = req.query as any;
    const at = await getZohoAccessToken(ag);
    res.send(at);
};

export { generateLoginLink, getAccessToken };
