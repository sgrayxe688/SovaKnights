// Dependancies //
import { Router } from 'express';
const router = Router();
import { addSubscription, deleteSubscription } from '../models/subscribe.models';
// Functions //
router.post('/add', (req, res) => {
    addSubscription(res, req.body);
})
router.delete('/delete', (req, res) => {
    deleteSubscription(res, req.body)
})
// Exports //
export default router;