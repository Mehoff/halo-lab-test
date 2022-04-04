import Film from "../../entities/film";
import Actors from "./actor.fixtures";
import Categories from "./category.fixtures";

const FILM_PARASITES: Film = {
  id: "d8e38c3e-32fc-4166-9fff-3b28d8f18ea8",
  actors: [Actors[0]],
  categories: [Categories[0]],
  description: "Description",
  title: "Parasites",
  release_year: 2020,
};

const Films: Film[] = [FILM_PARASITES];

export default Films;
