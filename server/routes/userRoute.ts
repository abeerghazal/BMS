import { Router } from 'express';

import { addUser, getUsers, profile } from '../controllers';
import { updateUser } from '../controllers/users';
import { InferRequestPayload } from '../interfaces/InferUserPayload';
import { Authorize } from '../middleware';

const router = Router();

router.put('/profile', (req, _, next) => Authorize(req as InferRequestPayload, _, next, 'user'), updateUser);
router.get('/profile', (req, _, next) => Authorize(req as InferRequestPayload, _, next, 'user'), profile);

router.post('/adduser', (req, _, next) => Authorize(req as InferRequestPayload, _, next, 'admin'), addUser);
router.get('/:page', (req, _, next) => Authorize(req as InferRequestPayload, _, next, 'admin'), getUsers);

export default router;
