import Joi from "joi";
import { IReqEnrollment } from "../../models/model.enrollment";

export const enrollmentValidator = (reqBody: IReqEnrollment) => {
    const enrollment =  Joi.object({
        customerId: Joi.string().min(5).max(100).required(),
        courseId: Joi.string().min(5).max(100).required(),
        courseFee: Joi.number().required(),
    })
    return enrollment.validate(reqBody)
}
