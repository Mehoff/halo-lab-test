import { Router, Request, Response } from "express";
import { findOneByNameValidator } from "../middleware/validators/category.validator";
import { errorValidationResult } from "../middleware/validators/error.validator";
import { CategoriesService } from "../services/category.service";
import {
  cacheMw,
  setToCache,
  getFromCache,
} from "../middleware/cache.middleware";

const router: Router = Router();
const categoriesService = new CategoriesService();

router.get("/", async (req: Request, res: Response) => {
  const categories = await categoriesService.findAll();
  res.send(categories);
});

router.get(
  "/:name",
  findOneByNameValidator,
  errorValidationResult,
  cacheMw,
  async (req: Request, res: Response) => {
    const { name } = req.params;

    const category = await categoriesService.findOneByName(name);

    if (!category) return res.json({ error: "Failed to get category" });

    setToCache(req.originalUrl, category);
    return res.send(category);
  }
);

export { router as categoriesRouter };
