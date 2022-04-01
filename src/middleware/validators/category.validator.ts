import { param } from "express-validator";

export const findOneByNameValidator = param("name")
  .isString()
  .toLowerCase()
  .trim()
  .isLength({ min: 1, max: 64 });
