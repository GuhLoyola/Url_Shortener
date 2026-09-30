import { pgTable, integer, varchar, primaryKey } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const url = pgTable("url", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	urlOriginal: varchar("url_original", { length: 255 }).notNull(),
	urlEncurtada: varchar("url_encurtada", { length: 255 }).notNull(),
});
