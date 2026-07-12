import { drizzle } from "drizzle-orm/bun-sql";

const dbClient = drizzle(process.env.DATABASE_URL);

export default dbClient;
