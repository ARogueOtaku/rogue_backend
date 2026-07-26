import serverConfig from "@core/serverConfig";
import { status } from "elysia";

const WellKnownService = {
	publicKeys: async () => {
		return status(200, serverConfig.PUBLIC_JWKS);
	},
};

export default WellKnownService;
