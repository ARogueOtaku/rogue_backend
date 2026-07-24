import { getSchemaValidator, t } from "elysia";

export const ConfigSchema = t.Object(
	{
		PORT: t.Integer(),
		DATABASE_URL: t.String(),
		CACHE_URL: t.String(),
	},
	{
		additionalProperties: true,
	},
);

export const configValidator = getSchemaValidator(ConfigSchema);

const serverConfig = configValidator.parse(process.env);

export default serverConfig;
