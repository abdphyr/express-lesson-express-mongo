import { Request, Response } from 'express';
import { Customer } from '../../models/model.customer';

export const getCustomers = async (req: Request, res: Response) => {
    const customers = await Customer.find().sort('name')
    res.send(customers)
}