import "dotenv/config";
import { Request, Response } from "express";
import * as urlService from "../services/urlService"

const PORT = process.env.PORT;


export async function verificarStatus(_: Request, res: Response) {
    return res.status(200).send("OK");
}

export async function buscarUrlsEncurtadasByData(req: Request, res: Response) {
    const { data } = req.query;

    const result = await urlService.buscarUrlsByData(String(data));

    if (!result || result.length === 0) {
        return res.status(404).send("Não foi encontrada nenhuma URL");
    }

    return res.status(200).json({ Urls_Encontradas: result });

}

export async function findUrlEncurtadaById(req: Request, res: Response) {
    const id = Number(req.query.id);

    if (!id || Number.isNaN(id)) {
        return res.status(400).send("ID inválido!");
    }

    const result = await urlService.findUrlEncurtadaById(id);

    if (result == null) {
        return res.status(404).send("URL não encontrada!");
    }

    const urlEncurtada = `http://localhost:${PORT}/${result.urlEncurtada}`

    return res.status(200).json({ Url_Encurtada: urlEncurtada });
}

export async function findUrlEncurtadaByEncurtamento(req: Request, res: Response) {
    const encurtamento = req.query.encurtamento;

    if (!encurtamento || String(encurtamento).trim() === "") {
        return res.status(400).send("Encurtamento não informado!");
    }
    const result = await urlService.findUrlEncurtadaByEncurtamento(String(encurtamento))

    if (result == null) {
        return res.status(404).send("URL não encontrada!");
    }

    const urlEncurtada = `http://localhost:${PORT}/${result.urlEncurtada}`

    return res.status(200).json({ Url_Encurtada: urlEncurtada });
}

export async function redirecionarParaUrlOriginal(req: Request, res: Response) {
    const { encurtada } = req.params;

    if (!encurtada || String(encurtada).trim() === "") {
        return res.status(400).send("Encurtamento não informado!");
    }

    const result = await urlService.findUrlEncurtadaByEncurtamento(String(encurtada));

    if (result == null) {
        return res.status(404).send("URL não encontrada!");
    }

    return res.redirect(302, result.urlOriginal);
}

export async function incluirUrl(req: Request, res: Response) {
    const { urlOriginal } = req.body ?? {};

    if (!urlOriginal) {
        res.status(400).send({ Erro: "A Url original é obrigatória!" });
        return;
    }

    const urlExistente = await urlService.findByUrlOriginal(urlOriginal);

    if (urlExistente) {
        let encurtadaExistente = `http://localhost:${PORT}/${urlExistente.urlEncurtada}`
        return res.status(200).json({ Id: urlExistente.id, Url_Encurtada: encurtadaExistente });
    }

    const result = await urlService.incluirUrl(urlOriginal);

    const resultUrlEncurtada = `http://localhost:${PORT}/${result.urlEncurtada}`

    return res.status(201).json({ Id: result.id, Url_Encurtada: resultUrlEncurtada })
}

