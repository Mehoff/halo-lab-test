import { DataSource } from "typeorm";
import Actor from "../entities/actor";
import Category from "../entities/category";
import Film from "../entities/film";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "postgres",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "movies",
  synchronize: true,
  logging: true,
  entities: [Category, Actor, Film],
  subscribers: [],
  migrations: [],
});
