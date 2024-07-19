/* This TypeScript code snippet is setting up a router using the Express framework. It imports */

import { Router } from 'express';
import { createNewUser, userLogin } from '../controller/index';
import '../passport-strategy/local-passport';
import passport from 'passport';

const router = Router();
// create new user
router.post('/newuser', createNewUser);

// login
router.post('/login', passport.authenticate('local'), userLogin);

export default router;
