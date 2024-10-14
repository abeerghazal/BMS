import { Router } from 'express';
import {
  getFlats, getFlatsUsers, flatById, updateFlat, availableFlats,
} from '../controllers/index';
import { InferRequestPayload } from '../interfaces/InferUserPayload';
import { Authorize } from '../middleware';

const router = Router();
router.get('/', getFlats);
router.use((req, _, next) => Authorize(req as InferRequestPayload, _, next, 'admin'));
router.get('/available', availableFlats);
router.get('/users', getFlatsUsers);
router.get('/:id', flatById);
router.put('/:id', updateFlat);

export default router;
