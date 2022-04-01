import Category from "../entities/category";
import { AppDataSource } from "./data-source";

const getEntities = async () => {
  const entities = [];
  await AppDataSource.entityMetadatas.forEach((e) =>
    entities.push({ name: e.name, tableName: e.tableName })
  );
  return entities;
};

export const clearDb = async () => {
  const entities = await getEntities();
  try {
    for (const entity of entities) {
      const repository = AppDataSource.getRepository(entity.name);
      await repository.query(`DELETE FROM public.${entity.tableName}`);
    }
  } catch (err) {
    console.error(err);
    throw new Error("clearDb() Failed\n");
  }
};

export const populateDb = async () => {
  await clearDb();

  const category = new Category();
  category.name = "Comedy";

  const category1 = new Category();
  category1.name = "Horror";

  AppDataSource.manager.save([category, category1]);
};
