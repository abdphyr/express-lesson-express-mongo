import { Request, Response } from 'express';
import { Category } from '../../models/model.category';

export const getCategories = async (req: Request, res: Response) => {
    const categories = await Category.find().sort({ name: 1 }).select({ _id: 0, __v:0 })
    res.send(categories)
}
