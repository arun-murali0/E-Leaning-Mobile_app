// index router

import { Router } from 'express';
import AuthRoute from './authRoute';

const router = Router();

// auth router 
router.use('/api/auth', AuthRoute);

export default router;
