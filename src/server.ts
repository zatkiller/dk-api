import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import {Request, Response, NextFunction} from 'express';
import cors from 'cors';

import {testAuthenticate} from './db/dbUtil';
testAuthenticate();

import regions from './routes/regions';
import hawkerCentres from './routes/hawkerCentres';
import stalls from './routes/stalls';
import products from './routes/products';

const app = express();
const PORT = process.env.PORT || '3000';

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/regions', regions);
app.use('/hawkerCentres', hawkerCentres);
app.use('/stalls', stalls);
app.use('/products', products);

app.all('*', (req: Request, res: Response) => res.send('You are at the wrong place. Shoo!'));

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke! Please try again later.');
});

app.listen(PORT, () => {
  console.log(`Express server is listening on ${PORT}`);
});
