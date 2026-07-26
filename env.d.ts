declare module "bun" {
	interface Env {
		PORT: string;
		DATABASE_URL: string;
		CACHE_URL: string;
	}
}
