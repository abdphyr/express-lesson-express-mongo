import Joi from 'joi';
import { ICourse } from '../../models/model.course';

type CourseReqBody = Pick<ICourse, 'title' | 'trainer' | 'status' | 'tags' | 'category'>

export const validateCourse = (reqBody: CourseReqBody) => {
    const courseValidator = Joi.object({
        title: Joi.string().min(5).max(30).required(),
        status: Joi.string().min(3).max(30).required(),
        tags: Joi.array().length(2).required(),
        trainer: Joi.string().min(5).max(30).required(),
        category: Joi.string().min(5).max(50).required()
    })
    return courseValidator.validate(reqBody)
}