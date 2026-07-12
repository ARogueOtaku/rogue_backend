import { drizzle } from "drizzle-orm/bun-sql";

const client = drizzle(process.env.DATABASE_URL);

export default client;
