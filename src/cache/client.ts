import serverConfig from "@core/serverConfig";
import { RedisClient } from "bun";

const cacheClient = new RedisClient(serverConfig.CACHE_URL);

export default cacheClient;
