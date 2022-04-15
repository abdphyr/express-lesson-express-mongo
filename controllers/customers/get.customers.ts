import { Request, Response } from 'express';
import { Customer } from '../../models/customer';

export const getCustomers = async (req: Request, res: Response) => {
    const customers = await Customer.find().sort('name')
    res.send(customers)
}