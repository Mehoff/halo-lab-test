import { Router, Request, Response } from "express";
import { findOneByNameValidator } from "../middleware/validators/category.validator";
import { errorValidationResult } from "../middleware/validators/error.validator";
import { CategoriesService } from "../services/category.service";

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
  async (req: Request, res: Response) => {
    const { name } = req.params;
    const category = await categoriesService.findOneByName(name);

    if (!category) return res.json({ error: "Failed to get category" });

    return res.send(category);
  }
);

export { router as categoriesRouter };
