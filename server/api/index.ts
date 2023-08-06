import bodyParser from 'body-parser';
import express, { Express, Response } from 'express';
import cors, { CorsOptions } from 'cors';
import { CommonResponse } from '../models/commonResponse';
import { randomUUID } from 'crypto';

const app: Express = express();
const PORT: number = 3000;

const corsOptions: CorsOptions = {
  origin:
    'https://travel-vault-git-feature-deploy-express-app-suvadeepghoshal.vercel.app/',
  optionsSuccessStatus: 200,
};

// Middleware
app.use(bodyParser.json());
app.use(cors(corsOptions));

// dummy to be removed later with the init route
app.get('/api', (_req, res): Response<CommonResponse> => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  return res.send({
    id: randomUUID(),
    date: Date(),
  });
});

app.listen(PORT, (): void => {
  console.log(
    `----- inside index.ts :: express app running for travel vault -----`
  );
});
module.exports = app;
