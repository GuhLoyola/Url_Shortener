import { nanoid } from "nanoid"
import * as urlRepository from "../repositories/urlRepository"

export async function incluirUrl(urlOriginal: string) {
    const urlEncurtada = nanoid(6);

    const dataCriacao = new Date().toISOString().split("T")[0];

    return await urlRepository.incluir(urlOriginal, urlEncurtada, dataCriacao)
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

export async function buscarUrlsByData(data: string) {
    return await urlRepository.buscarUrlsByData(data)
}