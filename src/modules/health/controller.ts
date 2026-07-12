import Elysia from "elysia";
import HealthService from "./service";

const healthController = new Elysia({ prefix: "/health" })
	.get("/liveness", HealthService.liveness)
	.get("/readiness", HealthService.readiness);

export default healthController;
