import { defineConfig } from "drizzle-kit";

export default defineConfig({
	out: "./src/database/gen",
	schema: "./src/database/schema.ts",
	dialect: "postgresql",
	dbCredentials: {
		url: process.env.DATABASE_URL,
	},
});
