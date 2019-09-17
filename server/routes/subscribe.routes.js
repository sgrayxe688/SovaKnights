// Dependancies //
import { Router } from 'express';
const router = Router();
import * as subscribeModels from '../models/subscribe.models';
// Functions //
router.post('/add', (req, res) => {
    subscribeModels.addSubscription(res, req.body);
})
router.delete('/delete', (req, res) => {
    subscribeModels.deleteSubscription(res, req.body)
})
// Exports //
export default router;