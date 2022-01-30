const Joi = require("joi");

export const userValidationSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),

  email: Joi.string()
    .required()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),

  password: Joi.string().alphanum().min(8).max(30).required(),
});
