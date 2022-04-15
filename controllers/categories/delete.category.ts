import { Request, Response } from 'express';
import { Category } from '../../models/category';

export const delCategory = async (req: Request, res: Response) => {
    const category = await Category.findOne({ id: parseInt(req.params.id) })

    if (!category) {
        return res.status(404).send("Category not found")
    }
    const delCat = await Category.findOneAndRemove({ id: parseInt(req.params.id) })
    res.status(200).send(delCat)
}   