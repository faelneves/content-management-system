export default {
  PORT: process.env.PORT || 3000,

  MONGO_HOST: process.env.MONGO_HOST || "localhost",
  MONGO_USER: process.env.MONGO_USER || "admin",
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || "password",
  MONGO_DB_NAME: process.env.MONGO_DB_NAME || "cms",
  MONGO_AUTH_SOURCE: process.env.MONGO_AUTH_SOURCE || "admin",

  REDIS_HOST: process.env.REDIS_HOST || "redis",
  REDIS_PORT: parseInt(process.env.REDIS_PORT || "6379"),
  REDIS_PASSWORD: process.env.REDIS_PASSWORD || "redispass",

  jwtSecret: process.env.JWT_SECRET || "your_jwt_secret",
};