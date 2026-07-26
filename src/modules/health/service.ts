import cacheClient from "@cache/client";
import dbClient from "@database/client";
import { sql } from "drizzle-orm";
import { status } from "elysia";

const HealthService = {
	liveness: async () => {
		return status(200, "🥷 Rogue Backend is Alive!");
	},
	readiness: async () => {
		try {
			await dbClient.execute(sql`SELECT 1`);
			const cacheResponse = await cacheClient.send("PING", []);
			if (`${cacheResponse}`.toUpperCase() !== "PONG")
				throw new Error("Cache Service did not respond with 'PONG'");
			return status(200, "🥷 Rogue Database and Cache is Available!");
		} catch (e) {
			console.error(e);
			throw status(503, "🥷 Rogue Database Or Cache is Unavailable!");
		}
	},
};

export default HealthService;
