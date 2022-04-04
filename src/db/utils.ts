import { AppDataSource } from "./data-source";

import Category from "../entities/category";
import Actor from "../entities/actor";
import Films from "./fixtures/film.fixtures";

import Categories from "./fixtures/category.fixtures";
import Actors from "./fixtures/actor.fixtures";
import Film from "../entities/film";

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

export const reinitializeDb = async () => {
  console.log("Populating db...");
  await clearDb();

  try {
    await AppDataSource.manager.getRepository(Category).save(Categories);
    await AppDataSource.manager.getRepository(Actor).save(Actors);
    await AppDataSource.manager.getRepository(Film).save(Films);
  } catch (err) {
    console.error("Error on populating db: ", err);
  }
};

export const disconnect = async () => {
  await AppDataSource.destroy();
};
