
import { Request, Response } from "express";
import { Customer } from "../../models/customer";
import { validateCustomers } from "./validate.customer";

export const putCustomer = async (req: Request, res: Response) => {
    const customer = await Customer.findById(req.params.id)

    if (!customer) {
        return res.status(404).send("Customer not found")
    }
    const { error } = validateCustomers(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
    const newCustomer = await Customer.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        isVip: req.body.isVip,
        number: req.body.number
    })
    res.send(newCustomer)
}