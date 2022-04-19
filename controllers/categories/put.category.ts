import { Request, Response } from "express";
import { validateCategories } from "./validator.category";
import { Category } from '../../models/model.category';


export const putCategory = async (req: Request, res: Response) => {
    const category = await Category.findOne({ id: parseInt(req.params.id) })

    if (!category) {
        return res.status(404).send("Category not found")
    }
    const { error } = validateCategories(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
    category.name = req.body.name
    const newCategory = await category.save()
    res.send(newCategory)
}







