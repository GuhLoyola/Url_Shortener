import { pgTable, integer, varchar, date } from "drizzle-orm/pg-core"


export const url = pgTable("url", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	urlOriginal: varchar("url_original", { length: 255 }).notNull(),
	urlEncurtada: varchar("url_encurtada", { length: 255 }).notNull(),
	dataCriacao: date("data_criacao").notNull(),
});
