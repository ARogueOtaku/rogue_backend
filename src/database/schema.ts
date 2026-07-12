import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
	id: uuid().primaryKey().defaultRandom(),
	email: varchar().notNull().unique(),
	password: varchar().notNull(),
});
