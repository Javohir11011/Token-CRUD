import Joi from "joi";
export const LoginSchema = Joi.object({
    email: Joi.string().email(),
    password: Joi.string().min(6),
    isSupperAdmin: Joi.boolean().required(),
    isAdmin: Joi.boolean().required()
});
