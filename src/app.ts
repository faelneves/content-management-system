import express from 'express';
import router from './routes/routerV1';


const app = express();
const port = process.env.port || 3000;

app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});