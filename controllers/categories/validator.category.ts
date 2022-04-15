import Joi from 'joi';


export const validateCategories = (body: { name: string }) => {
    const catSchema = Joi.object({
        name: Joi.string().min(3).required(),
    })

    return catSchema.validate(body)
}