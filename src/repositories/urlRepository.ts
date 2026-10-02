import { db } from "../db"
import { url } from "../../drizzle/schema"
import { eq, ilike } from "drizzle-orm";

export async function incluir(urlOriginal: string, urlEncurtada: string, dataCriacao: string) {
    const result = await db.insert(url).values({ urlOriginal, urlEncurtada, dataCriacao }).returning();
    return result[0];
}

export async function findByUrlOriginal(urlOriginal: string) {
    const result = await db.select().from(url).where(eq(url.urlOriginal, urlOriginal));
    return result[0];
}


export async function findByEncurtamento(encurtamento: string) {
    const result = await db.select().from(url).where(ilike(url.urlEncurtada, `%${encurtamento}%`));
    return result[0]
}

export async function findUrlEncurtadaById(id: number) {
    const result = await db.select().from(url).where(eq(url.id, id))
    return result[0];
}


export async function buscarUrlsByData(data: string) {
    const results = await db.select().from(url).where(eq(url.dataCriacao, data))
    return results;
}