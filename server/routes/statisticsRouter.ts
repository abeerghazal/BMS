import { Router } from 'express';
import {
  adminStatistics,
} from '../controllers';

const router = Router();

router.get('/admin', adminStatistics);

export default router;
