import { Request, Response } from "express";
import { Customer } from "../../models/customer";
import { validateCustomers } from "./validate.customer";

export const postCustomer = async (req: Request, res: Response) => {
    const newCustomer = new Customer({
        name: req.body.name,
        isVip: req.body.isVip,
        number: req.body.number
    })
    if (!req.body) {
        return res.status(400).send("Malumot kirting")
    }
    const { error } = validateCustomers(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
    const newCus = await newCustomer.save()
    res.status(201).send(newCus)
}







