import Joi from 'joi';

interface ValidateCustomers {
    name: string;
    isVip: boolean;
    number: number;
}

export const validateCustomers = (body: ValidateCustomers) => {
    const catSchema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        isVip: Joi.boolean().required(),
        number: Joi.string().min(5).max(50).required()
    })

    return catSchema.validate(body)
}