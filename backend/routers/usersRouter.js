import express from 'express';
import catchAsync from 'express-async-handler';

import {
    isAdmin,
    isAuth
} from '../utils.js';

import {
    topSellers,
    seed,
    logging,
    index,
    update,
    register,
    show,
    profile,
    deletes
} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/top-sellers', catchAsync(topSellers));

userRouter.get('/seed', catchAsync(seed));

userRouter.post('/signin', catchAsync(logging));

userRouter.post('/register', catchAsync(register));

userRouter.get('/:id', catchAsync(show));
userRouter.put('/profile', isAuth, catchAsync(profile));

userRouter.get('/', isAuth, isAdmin, catchAsync(index));

userRouter.delete('/:id', isAuth, isAdmin, catchAsync(deletes));

userRouter.put('/:id', isAuth, isAdmin, catchAsync(update));

export default userRouter;