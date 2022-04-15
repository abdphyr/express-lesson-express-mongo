import { Router } from 'express';
import { getCategory } from '../controllers/categories/get.category';
import { getCategories } from '../controllers/categories/get.categories';
import { postCategory } from '../controllers/categories/post.category';
import { putCategory } from '../controllers/categories/put.category';
import { delCategory } from '../controllers/categories/delete.category';

export const categoryRouter = Router()

categoryRouter.get('/', getCategories)
categoryRouter.get('/:id', getCategory)
categoryRouter.post('/', postCategory)
categoryRouter.put('/:id', putCategory)
categoryRouter.delete('/:id', delCategory)