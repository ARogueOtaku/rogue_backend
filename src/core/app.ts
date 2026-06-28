import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import healthController from "../modules/health/controller";

const app = new Elysia().use(swagger()).use(healthController);

export default app;
