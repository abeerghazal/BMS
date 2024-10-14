import { verify } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { InferUserPayload } from '../../interfaces/InferUserPayload';

dotenv.config();
const { env: { SECRET_KEY } } = process;

export default (token: string): Promise <InferUserPayload> => (
  new Promise((resolve, reject) => {
    verify(token, SECRET_KEY, (err: Error, match: InferUserPayload) => {
      if (err) return reject(err);
      return resolve(match);
    });
  }));
