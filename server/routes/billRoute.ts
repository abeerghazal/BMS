import { Router } from 'express';
import { getAllBills, payBill, sendBillMessage } from '../controllers';
import { InferRequestPayload } from '../interfaces/InferUserPayload';
import { Authorize } from '../middleware';

const router = Router();
router.use((req, _, next) => Authorize(req as InferRequestPayload, _, next, 'admin'));
router.get('/', getAllBills);
router.get('/sendmessage/:billID', sendBillMessage);
router.get('/paybill/:id', payBill);

export default router;
