import { Request, Response } from 'express';
import { Customer } from '../../models/customer';

export const getCustomer = async (req: Request, res: Response) => {
    const customer = await Customer.findById(req.params.id)

    if (!customer) {
        return res.status(404).send("Customer not found")
    }
    res.send(customer)
}