import Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const productSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'any.required': '400, "name" is required',
    'string.empty': '400, "name" is required',
    'string.base': '422, "name" must be a string',
    'string.min': '422, "name" length must be at least 3 characters long',
  }),
  amount: Joi.string().min(3).required().messages({
    'any.required': '400, "amount" is required',
    'string.empty': '400, "amount" is required',
    'string.base': '422, "amount" must be a string',
    'string.min': '422, "amount" length must be at least 3 characters long',
  }),
});

const userSchema = Joi.object({
  username: Joi.string().min(3).required().messages({
    'any.required': '400, "username" is required',
    'string.empty': '400, "username" is required',
    'string.base': '422, "username" must be a string',
    'string.min': '422, "username" length must be at least 3 characters long',
  }),
  classe: Joi.string().min(3).required().messages({
    'any.required': '400, "classe" is required',
    'string.empty': '400, "classe" is required',
    'string.base': '422, "classe" must be a string',
    'string.min': '422, "classe" length must be at least 3 characters long',
  }),
  level: Joi.number().min(1).required().messages({
    'any.required': '400, "level" is required',
    'number.empty': '400, "level" is required',
    'number.base': '422, "level" must be a number',
    'number.min': '422, "level" must be greater than or equal to 1',
  }),
  password: Joi.string().min(8).required().messages({
    'any.required': '400, "password" is required',
    'string.empty': '400, "password" is required',
    'string.base': '422, "password" must be a string',
    'string.min': '422, "password" length must be at least 8 characters long',
  }),
});

const orderSchema = Joi.object({
  productsIds: Joi.array().min(1).items(Joi.number()).required()
    .messages({
      'any.required': '400, "productsIds" is required',
      'array.empty': '400, "productsIds" is required',
      'array.base': '422, "productsIds" must be an array',
      'array.min': '422, "productsIds" must include only numbers',
      'number.base': '422, "productsIds" must include only numbers',
    }),
});

export default {
  loginSchema,
  productSchema,
  userSchema,
  orderSchema,
};
