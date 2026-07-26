import app from "@core/app";
import serverConfig from "@core/serverConfig";

app.listen(serverConfig.PORT, (server) =>
	console.log(
		`🥷 Rogue Backend is running at ${server.hostname}:${server.port}`,
	),
);
