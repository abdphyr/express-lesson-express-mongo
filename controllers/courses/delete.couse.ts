import { RequestHandler } from "express";
import { Course } from "../../models/model.course";

export const deleteCourse: RequestHandler = async (req, res) => {
    const deletedCourse = await Course.findByIdAndRemove(req.params.id)
    if (!deletedCourse){
        res.status(404).send(`Course not found`)
        return
    }
    res.send(deletedCourse)
}