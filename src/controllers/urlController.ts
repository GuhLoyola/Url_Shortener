import { Request, Response } from "express";
import * as urlService from "../services/urlService"

export async function verificarStatus(_: Request, res: Response) {
    return res.status(200).json({ "Status": "OK" });
}

export async function findUrlEncurtadaById(req: Request, res: Response) {
    const id = req.query.id;

    const result = await urlService.findUrlEncurtadaById(Number(id));

    if (result == null) {
        return res.status(404).write("ERRO AO BUSCAR: URL não encontrada!");
    }

    return res.status(200).json(result);
}

export async function findUrlEncurtadaByEncurtamento(req: Request, res: Response) {
    const short = req.query.encurtamento;

    const encurtamento = (short && String(short).trim() != '') ? short : null

    const result = await urlService.findUrlEncurtadaByEncurtamento(String(encurtamento))

    if (result == null) {
        return res.status(404).write("ERRO AO BUSCAR: URL não encontrada!");
    }

    return res.status(200).json(result);
}

export async function incluirUrl(req: Request, res: Response) {
    const { urlOriginal } = req.body ?? {};

    if (!urlOriginal) {
        res.status(400).json({ "Erro": "A Url original é obrigatória!" });
        return;
    }

    const urlExistente = await urlService.findByUrlOriginal(urlOriginal);

    if (urlExistente) {
        return res.status(200).json(urlExistente);
    }

    const result = await urlService.incluirUrl(urlOriginal);

    return res.status(201).json(result)
}

