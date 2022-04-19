import { RequestHandler } from "express";
import { Course } from "../../models/model.course";
import { Category } from "../../models/model.category";
import { validateCourse } from "./validate.course";

export const putCourse: RequestHandler = async (req, res) => {
    const course = await Course.findById(req.params.id)
    if (!course) {
        res.status(404).send(`Couse not found`)
        return
    }
    const { title, trainer, status, tags, categoryName } = req.body
    const { error } = validateCourse(req.body)
    if (error) {
        res.status(400).send(error.details[0].message)
        return
    }
    const category = await Category.findOne({ name: categoryName })
    if (!category) {
        res.status(400).send(`${categoryName} is not found from categories list`)
        return
    }
    course.title = title
    course.trainer = trainer
    course.status = status
    course.tags = tags
    course.category = category
    const savedCourse = await course.save()
    res.send(course)
}