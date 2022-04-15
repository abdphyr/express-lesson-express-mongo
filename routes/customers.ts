import { Router } from 'express';
import { getCustomer} from '../controllers/customers/get.customer';
import { getCustomers} from '../controllers/customers/get.customers';
import { postCustomer } from '../controllers/customers/post.customer';
import { putCustomer } from '../controllers/customers/put.customer';
import { delCustomer } from '../controllers/customers/delete.customer';

export const customerRouter = Router()

customerRouter.get('/', getCustomers)
customerRouter.get('/:id', getCustomer)
customerRouter.post('/', postCustomer)
customerRouter.put('/:id', putCustomer)
customerRouter.delete('/:id', delCustomer)