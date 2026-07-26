import openapi from "@elysia/openapi";
import wellKnownController from "@modules/wellKnown/controller";
import { Elysia } from "elysia";
import healthController from "../modules/health/controller";

const app = new Elysia()
	.use(
		openapi({
			path: "/docs",
			exclude: {
				staticFile: false,
			},
			documentation: {
				tags: [
					{
						name: "Health",
						description: "Service Info Endpoints",
					},
					{
						name: "Well Known",
						description: "Standard Well Known Endpoints",
					},
				],
				info: {
					title: "Rogue Backend Documentation",
					version: "1.0",
				},
			},
		}),
	)
	.use(healthController)
	.use(wellKnownController);

export default app;
