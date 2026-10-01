import "dotenv/config";
import { nanoid } from "nanoid"
import * as urlRepository from "../repositories/urlRepository"

const PORT = process.env.PORT;

export async function incluirUrl(url: string) {
    const urlOriginal = url;
    url = nanoid(6);

    const short = `http://localhost:${PORT}/${url}`;

    return await urlRepository.incluir(urlOriginal, short)
}

export async function findByUrlOriginal(url: string) {
    return await urlRepository.findByUrlOriginal(url);
}

export async function findUrlEncurtadaByEncurtamento(encurtamento: string) {
    return await urlRepository.findByEncurtamento(encurtamento);
}

export async function findUrlEncurtadaById(id: number) {
    return await urlRepository.findUrlEncurtadaById(id);
}