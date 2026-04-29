import { Router } from 'express';
import { 
    checkUserInput 

} from '../middleware/auth';

import { registerUser, loginAccount } from '../controllers/user.controller';

const router = Router();

router.post('/users', checkUserInput, registerUser);
router.post('/login', checkUserInput, loginAccount);

export default router;