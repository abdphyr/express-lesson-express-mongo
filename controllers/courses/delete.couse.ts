import { RequestHandler } from "express";
import { Course } from "../../models/model.course";

export const deleteCourse: RequestHandler = async (req, res) => {
    const course = await Course.findById(req.params.id)
    if (!course){
        res.status(404).send(`Course not found`)
        return
    }
    const deletedCourse = await Course.findByIdAndRemove(req.params.id)
    res.send(deletedCourse)
}