import express from 'express';
import compression from 'compression';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { join } from 'path';
import morgan from 'morgan';
import {
  Authenticate,
  clientError, serverError,
} from './middleware';

import router from './routes';

dotenv.config();

const {
  env: { PORT, NODE_ENV },
} = process;

const app = express();
app.set('port', PORT || 5000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(cookieParser());

if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(Authenticate);
app.use('/api/v1', router);

if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.use(clientError);
app.use(serverError);

export default app;
