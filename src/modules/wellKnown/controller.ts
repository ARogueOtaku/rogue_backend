import Elysia from "elysia";
import WellKnownService from "./service";

const wellKnownController = new Elysia({
	prefix: "/well-known",
	tags: ["Well Known"],
}).get("/jwks.json", WellKnownService.publicKeys);

export default wellKnownController;
