import { getSchemaValidator, t } from "elysia";

const PublicJWKSchema = t.Object(
	{
		kty: t.Literal("RSA"),
		use: t.Union([t.Literal("sig"), t.Literal("enc")]),
		alg: t.Union([
			t.Literal("RS256"),
			t.Literal("RS384"),
			t.Literal("RS512"),
			t.Literal("PS256"),
			t.Literal("PS384"),
			t.Literal("PS512"),
		]),

		kid: t.String(),
		n: t.String(),
		e: t.String(),
	},
	{ additionalProperties: true },
);

const PrivateJWKSSchema = t.Object(
	{
		...PublicJWKSchema.properties,
		d: t.String(),
		p: t.String(),
		q: t.String(),
		dp: t.String(),
		dq: t.String(),
		qi: t.String(),
	},
	{ additionalProperties: true },
);

export const ConfigSchema = t.Object(
	{
		PORT: t.Integer(),
		DATABASE_URL: t.String(),
		CACHE_URL: t.String(),
		PUBLIC_JWKS: t.ObjectString({
			keys: t.Array(PublicJWKSchema),
		}),
		PRIVATE_JWKS: t.ObjectString({
			keys: t.Array(PrivateJWKSSchema),
		}),
	},
	{
		additionalProperties: true,
	},
);

export const configValidator = getSchemaValidator(ConfigSchema);

const serverConfig = configValidator.parse(process.env);

export default serverConfig;
