import { Request } from 'express';

interface InferUserPayload {
  id: number;
  role: string;
  first_name: string;
  last_name: string;
}

interface InferRequestPayload extends Request {
  user: InferUserPayload
}
export { InferUserPayload, InferRequestPayload };
