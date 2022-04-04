import { param } from "express-validator";

export const findOneByTitleValidator = param("title")
  .isString()
  .toLowerCase()
  .trim()
  .isLength({ min: 1, max: 128 });
