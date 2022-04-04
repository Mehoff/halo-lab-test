import { ILike } from "typeorm";
import { AppDataSource } from "../db/data-source";
import Category from "../entities/category";

export class CategoriesService {
  private categoryRepository = AppDataSource.getRepository(Category);

  public async findAll(): Promise<Category[]> {
    const categories: Category[] = await this.categoryRepository.find();
    return categories;
  }

  public async findOneByName(name: string): Promise<Category> {
    const category: Category = await this.categoryRepository.findOne({
      where: { name: ILike(name) },
    });

    console.info(`Get '${name}' from Postgres...`);
    return category;
  }
}
