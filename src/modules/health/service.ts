import client from "@database/client";
import { sql } from "drizzle-orm";
import { status } from "elysia";

const HealthService = {
	liveness: async () => {
		return status(200, "🥷 Rogue Backend is Alive!");
	},
	readiness: async () => {
		try {
			await client.execute(sql`SELECT 1`);
			return status(200, "🥷 Rogue Database is Available!");
		} catch (e) {
			console.error(e);
			throw status(503, "🥷 Rogue Database is Unavailable!");
		}
	},
};

export default HealthService;
