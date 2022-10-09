import Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const productSchema = Joi.object({
  name: Joi.string().min(2).required().messages({
    'any.required': '400, "name" is required',
    'string.empty': '400, "name" is required',
    'string.base': '422, "name" must be a string',
    'string.min': '422, "name" length must be at least 3 characters long',
  }),
  amount: Joi.string().min(2).required().messages({
    'any.required': '400, "amount" is required',
    'string.empty': '400, "amount" is required',
    'string.base': '422, "amount" must be a string',
    'string.min': '422, "amount" length must be at least 3 characters long',
  }),
});

export default {
  loginSchema,
  productSchema,
};
