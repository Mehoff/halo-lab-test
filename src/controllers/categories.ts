import { Router, Request, Response } from "express";
import { CategoriesService } from "../services/category.service";

const router: Router = Router();
const categoriesService = new CategoriesService();

router.get("/", async (req: Request, res: Response) => {
  const categories = await categoriesService.findAll();
  res.send(categories);
});

router.get("/:name", async (req: Request, res: Response) => {
  const { name } = req.params;
  const category = await categoriesService.findOneByName(name);
  return res.send(category);
});

export { router as categoriesRouter };
