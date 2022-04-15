import { Request, Response } from "express";
import { Customer } from "../../models/customer";


export const delCustomer = async (req: Request, res: Response) => {
    const customer = await Customer.findById(req.params.id)

    if (!customer) {
        return res.status(404).send("Customer not found")
    }
    
    const delCat = await Customer.findByIdAndDelete(req.params.id)
    res.status(200).send(delCat)
}   