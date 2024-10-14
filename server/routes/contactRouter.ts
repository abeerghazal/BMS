import { Router } from 'express';
import { addContact, getContact } from '../controllers';
import { InferRequestPayload } from '../interfaces/InferUserPayload';
import { Authorize } from '../middleware';

const router = Router();

router.get('/', (req, _, next) => Authorize(req as InferRequestPayload, _, next, 'admin'), getContact);
router.post('/', addContact);

export default router;
