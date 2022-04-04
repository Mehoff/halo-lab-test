import { Router, Request, Response } from "express";
import { errorValidationResult } from "../middleware/validators/error.validator";
import { FilmService } from "../services/film.service";
import { findOneByTitleValidator } from "../middleware/validators/film.validator";
import { cacheMw } from "../middleware/cache.middleware";

const router: Router = Router();
const filmsService = new FilmService();

router.get("/", cacheMw, async (req: Request, res: Response) => {
  const films = await filmsService.findAll();
  res.send(films);
});

router.get(
  "/:title",
  findOneByTitleValidator,
  errorValidationResult,
  cacheMw,
  async (req: Request, res: Response) => {
    const { title } = req.params;

    const film = await filmsService.findOneByTitle(title);
    if (!film) return res.send({ error: "Failed to get film" });

    res.send(film);
  }
);

export { router as filmsRouter };
