import { RequestHandler } from "express";
import { Course } from "../../models/model.course";

export const getCourses: RequestHandler = async (req, res) => {
    const courses = await Course.find({category: { id: 0, __v: 0 }}).sort('title')
    res.send(courses)
}