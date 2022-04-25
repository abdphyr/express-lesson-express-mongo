import { RequestHandler } from "express";
import { Course, IReqCourse } from "../../models/model.course";
import { Category } from "../../models/model.category";
import { validateCourse } from "./validate.course";

export const postCourse: RequestHandler = async (req, res) => {
    const { title, trainer, status, tags, categoryName} = req.body as IReqCourse
    const { error } = validateCourse(req.body)
    if (error){
        res.status(400).send(error.details[0].message)
        return
    }
    const newCategory = await Category.findOne({ name: categoryName})
    if (!newCategory){
        res.status(400).send(`${categoryName} is not found from categories list`)
        return
    }
    const course = new Course({
        title,
        trainer,
        status,
        tags,
        category: newCategory
    })
    const savedCourse = await course.save()
    res.status(201).send(savedCourse)
} 