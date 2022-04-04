import { ILike } from "typeorm";
import { AppDataSource } from "../db/data-source";
import Film from "../entities/film";

export class FilmService {
  private filmRepository = AppDataSource.getRepository(Film);

  public async findAll(): Promise<Film[]> {
    const films = await this.filmRepository.find();
    return films;
  }

  public async findOneByTitle(title: string): Promise<Film> {
    const film = await this.filmRepository.findOne({
      where: { title: ILike(title) },
      relations: ["actors", "categories"],
    });

    delete film.id;

    console.info(`Get ${title} from Postgres...`);
    return film;
  }
}