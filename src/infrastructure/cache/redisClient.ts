import { createClient, RedisClientType } from "redis";
import env from "../../config/env";

let redisClient: RedisClientType;

const connectRedis = async () => {
  redisClient = createClient({
    socket: {
      host: env.REDIS_HOST,
      port: env.REDIS_PORT,
    },
    password: env.REDIS_PASSWORD,
  });

  redisClient.on("error", (err) => console.error("Redis Client Error:", err));
  await redisClient.connect();
  console.log("Connected to Redis");
  return redisClient;
};

export { redisClient, connectRedis };