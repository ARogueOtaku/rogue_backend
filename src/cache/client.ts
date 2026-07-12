import { RedisClient } from "bun";

const cacheClient = new RedisClient(process.env.CACHE_URL);

export default cacheClient;
