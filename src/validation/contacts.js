import Joi from "joi";

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().label("Name"),

  number: Joi.string()
    .pattern(/^\+?[0-9\s-]+$/)
    .min(3)
    .max(20)
    .required()
    .label("Number"),

  email: Joi.string().email().optional().label("Email"),

  isFavorite: Joi.boolean().optional().label("Favorite"),

  contactType: Joi.string()
    .valid("work", "home", "personal")
    .label("Contact type"),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).optional().label("Name"),

  number: Joi.string()
    .pattern(/^\+?[0-9\s-]+$/)
    .min(3)
    .max(20)
    .optional()
    .label("Number"),

  email: Joi.string().email().optional().label("Email"),

  isFavorite: Joi.boolean().optional().label("Favorite"),

  contactType: Joi.string()
    .valid("work", "home", "personal")
    .optional()
    .label("Contact type"),
});
