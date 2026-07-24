import serverConfig from "@core/serverConfig";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	out: "./src/database/gen",
	schema: "./src/database/schema.ts",
	dialect: "postgresql",
	dbCredentials: {
		url: serverConfig.DATABASE_URL,
	},
});
