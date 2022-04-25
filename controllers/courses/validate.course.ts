import Joi from 'joi';
import { IReqCourse } from '../../models/model.course';


export const validateCourse = (reqBody: IReqCourse) => {
    const courseValidator = Joi.object({
        title: Joi.string().min(5).max(30).required(),
        fee: Joi.number().required(),
        status: Joi.string().min(3).max(30).required(),
        tags: Joi.array().items(Joi.string()).length(2).required(),
        trainer: Joi.string().min(5).max(30).required(),
        categoryName: Joi.string().min(5).max(50).required()
    })
    return courseValidator.validate(reqBody)
}