import serverConfig from "@core/serverConfig";
import { drizzle } from "drizzle-orm/bun-sql";

const client = drizzle(serverConfig.DATABASE_URL);

export default client;
