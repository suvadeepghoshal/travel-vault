import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

const corsOptions = {
  origin: 'http://localhost:4200',
  optionSuccessStatus: 200,
};

// Middleware
app.use(bodyParser.json());
app.use(cors(corsOptions));

// dummy to be removed later with the init route
app.get('/', (_req, res) => {
  res.send({
    app: 'Travel Vault',
  });
});

app.listen(PORT, () => {
  console.log(
    `----- inside index.ts :: express app running for travel vault -----`
  );
});
