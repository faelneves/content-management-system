import express from 'express';
import router from './routes/routerV1';
import connectDB from './infrastructure/database/database';
import env from './config/env';


const app = express();
const port = env.PORT

app.use('/api/v1', router);

(async () => {
  await connectDB();
  app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });
})();
