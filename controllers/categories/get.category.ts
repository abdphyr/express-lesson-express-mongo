import { Request, Response } from 'express';
import { Category } from '../../models/model.category';

export const getCategory = async (req: Request, res: Response) => {
    const category = await Category.findOne({ id: parseInt(req.params.id) }).select({ _id: 0, __v:0 })

    if (!category) {
        return res.status(404).send("Category not found")
    }
    res.send(category)
}