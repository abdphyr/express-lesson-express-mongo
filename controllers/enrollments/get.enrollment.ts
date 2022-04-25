import { RequestHandler } from "express";
import { Enrollment } from "../../models/model.enrollment";


export const getEnrollment: RequestHandler = async (req, res) => {
    const enrollment = await Enrollment.findById(req.params.id)
    if (!enrollment){
        res.status(404).send("Not found")
        return
    }
    res.send(enrollment)
}