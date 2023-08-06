import bodyParser from 'body-parser';
import express, { Response } from 'express';
import cors, { CorsOptions } from 'cors';
import { CommonResponse } from './models/commonResponse';
import { randomUUID } from 'crypto';

const app = express();
const PORT = 3000;

const corsOptions: CorsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200,
};

// Middleware
app.use(bodyParser.json());
app.use(cors(corsOptions));

// dummy to be removed later with the init route
app.get('/', (_req, res): Response<CommonResponse> => {
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
