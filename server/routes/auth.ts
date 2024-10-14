import { Router } from 'express';
import { login, logout } from '../controllers';
import { InferRequestPayload } from '../interfaces/InferUserPayload';
import { Authorize, GetUserData } from '../middleware';

const router = Router();

router.post('/login', login);
router.get('/userdata', GetUserData);
router.get('/logout', (req, _, next) => Authorize(req as InferRequestPayload, _, next, null), logout);

export default router;
