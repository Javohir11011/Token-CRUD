import Joi from "joi";
export const LoginSchema = Joi.object({
    email: Joi.string().email(),
    password: Joi.string().min(6),
    role: Joi.string().valid("user", "admin", "superAdmin").required().default("user"),
});
