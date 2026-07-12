import { usersTable } from "./schema";

export const DBUser = usersTable.$inferSelect;
export const DBUserInsert = usersTable.$inferInsert;
