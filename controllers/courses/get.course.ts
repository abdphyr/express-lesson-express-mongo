import { RequestHandler } from "express";
import { Course } from "../../models/model.course";

export const getCourse: RequestHandler = async (req, res) => {
    const course = await Course.findById(req.params.id)
    if (!course){
        res.status(404).send(`Course not found`)
        return
    }
    res.send(course)
}



