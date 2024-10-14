import { Router } from 'express';

import {
  addComplaints, deleteSingleComplaint, getAllComplaints, getSingleComplaint,
} from '../controllers';
import { InferRequestPayload } from '../interfaces/InferUserPayload';
import { Authorize } from '../middleware';

const router = Router();

router.post('/', (req, _, next) => Authorize(req as InferRequestPayload, _, next, 'user'), addComplaints);
router.use((req, _, next) => Authorize(req as InferRequestPayload, _, next, 'admin'));
router.get('/', getAllComplaints);
router.delete('/:id', deleteSingleComplaint);
router.get('/:id', getSingleComplaint);

export default router;
