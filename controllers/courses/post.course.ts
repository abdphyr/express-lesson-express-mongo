import { RequestHandler } from "express";
import { Course } from "../../models/model.course";
import { Category } from "../../models/model.category";
import { validateCourse } from "./validate.course";

export const postCourse: RequestHandler = async (req, res) => {
    const { title, trainer, status, tags, category} = req.body
    const { error } = validateCourse(req.body)
    if (error){
        res.status(400).send(error.details[0].message)
        return
    }
    const newCategory = await Category.findOne({ name: category})
    if (!newCategory){
        res.status(400).send(`${category} is not found from categories list`)
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