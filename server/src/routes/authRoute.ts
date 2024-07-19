import { Router } from 'express';
import { createNewUser, userLogin } from '../controller/index';
import '../passport-strategy/local-passport';
import passport from 'passport';

const router = Router();

router.post('/newuser', createNewUser);
router.post('/login', passport.authenticate('local'), userLogin);

export default router;
