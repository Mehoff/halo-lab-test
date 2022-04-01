import Category from "../entities/category";
import { AppDataSource } from "./data-source";

export const populateDb = async () => {
  const category = new Category();
  category.name = "Comedy";

  AppDataSource.manager.save(category);
};
