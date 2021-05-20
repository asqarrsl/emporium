import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import {
    isAdmin,
    isAuth,
    isSellerOrAdmin
} from '../utils.js';
import {
    index,
    categories,
    seed,
    show,
    store,
    update,
    deletes,
    postReviews
} from "../controllers/productController.js";


const productRouter = express.Router();

productRouter.get('/', expressAsyncHandler(index));

productRouter.get('/categories', expressAsyncHandler(categories));

productRouter.get('/seed', expressAsyncHandler(seed));

productRouter.get('/:id', expressAsyncHandler(show));

productRouter.post('/', isAuth, isSellerOrAdmin, expressAsyncHandler(store));

productRouter.put('/:id', isAuth, isSellerOrAdmin, expressAsyncHandler(update));

productRouter.delete('/:id', isAuth, isAdmin, expressAsyncHandler(deletes));

productRouter.post('/:id/reviews', isAuth, expressAsyncHandler(postReviews));

export default productRouter;