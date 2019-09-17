// Dependancies //
import { Router } from 'express';
import { getUser, createNewUser } from '../models/user.models';
const router = Router();
// Functions //
router.post('/login', (req, res) => {
    getUser(res, req.body);
})
router.post('/signup', (req, res) => {
    createNewUser(res, req.body)
})
// Exports //
export default router