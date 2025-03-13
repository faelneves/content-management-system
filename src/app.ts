import express from 'express';
import router from './routes/routerV1';
import connectDB from './infrastructure/database/database';
import env from './config/env';
import { connectRedis } from './infrastructure/cache/redisClient';


const app = express();
const port = env.PORT

app.use('/api/v1', router);

app.use(express.json());

(async () => {
  await connectDB();
  await connectRedis();
  app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });
})();
