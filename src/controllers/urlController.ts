import { Request, Response } from "express";

export async function verificarStatus(_: Request, res: Response) {
    return res.status(200).json({ "Status": "OK" });
}