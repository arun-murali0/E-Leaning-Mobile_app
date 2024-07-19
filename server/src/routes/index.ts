import { Router } from 'express';
import AuthRoute from './authRoute';

const router = Router();

router.use('/api/auth', AuthRoute);

export default router;
