import { Request, Response } from "express";
import { Category } from '../../models/model.category';
import { validateCategories } from "./validator.category";


export const postCategory = async (req: Request, res: Response) => {
    const categories = await Category.find()
    const newCategory = new Category({
        id: categories.length + 1,
        name: req.body.name
    })
    if (!req.body) {
        return res.status(400).send("Malumot kirting")
    }
    const { error } = validateCategories(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
    const newCat = await newCategory.save()
    res.status(201).send(newCat)
}







