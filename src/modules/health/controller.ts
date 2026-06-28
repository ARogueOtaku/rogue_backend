import Elysia from "elysia";

const healthController = new Elysia({ prefix: "/health" }).get(
	"/liveness",
	() => "🥷 Rogue Backend is Alive!",
);

export default healthController;
