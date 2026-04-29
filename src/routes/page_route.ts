import { Router } from 'express';
import { getUsers, getId, getLogginAccount } from '../controllers/user.controller';

const router = Router();

router.get('/users', getUsers);

router.get('/checkid', getId);

router.get('/login', getLogginAccount);

export default router;
