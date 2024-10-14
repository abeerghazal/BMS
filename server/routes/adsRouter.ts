import { Router } from 'express';
import {
  adddAdve, deleteAdv, getAdvById, getAdvertisements, updateAdv,
} from '../controllers';
import { InferRequestPayload } from '../interfaces/InferUserPayload';
import { Authorize } from '../middleware';

const router = Router();

router.get('/', getAdvertisements);
router.use((req, _, next) => Authorize(req as InferRequestPayload, _, next, 'admin'));
router.get('/:id', getAdvById);
router.post('/', adddAdve);
router.put('/:id', updateAdv);
router.delete('/:id', deleteAdv);

export default router;
