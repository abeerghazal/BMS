import { Router } from 'express';
import {
  getServices, postServices, updateServices, getServiceById,
} from '../controllers';
import { InferRequestPayload } from '../interfaces/InferUserPayload';
import { Authorize } from '../middleware';

const router = Router();
router.use((req, _, next) => Authorize(req as InferRequestPayload, _, next, 'admin'));

router.get('/', getServices);
router.post('/', postServices);
router.put('/:id', updateServices);
router.get('/:id', getServiceById);

export default router;
