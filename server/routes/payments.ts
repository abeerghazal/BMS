import { Router } from 'express';
import { allUserPayments } from '../controllers';
import { InferRequestPayload } from '../interfaces/InferUserPayload';
import { Authorize } from '../middleware';

const router = Router();
router.use((req, _, next) => Authorize(req as InferRequestPayload, _, next, 'user'));
router.get('/:userId', allUserPayments);

export default router;
