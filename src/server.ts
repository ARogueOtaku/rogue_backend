import app from "@core/app";

app.listen(process.env.PORT, (server) =>
	console.log(
		`🥷 Rogue Backend is running at ${server.hostname}:${server.port}`,
	),
);
