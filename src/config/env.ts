export default {
  PORT: process.env.PORT || 3000,
  MONGO_HOST: process.env.MONGO_HOST || "localhost",
  MONGO_USER: process.env.MONGO_USER || "admin",
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || "password",
  MONGO_DB_NAME: process.env.MONGO_DB_NAME || "cms",
  MONGO_AUTH_SOURCE: process.env.MONGO_AUTH_SOURCE || "admin",
  jwtSecret: process.env.JWT_SECRET || "your_jwt_secret",
};