import Film from "../../entities/film";
import Actors from "./actor.fixtures";
import Categories from "./category.fixtures";

const FILM_PARASITES: Film = {
  id: "d8e38c3e-32fc-4166-9fff-3b28d8f18ea8",
  actors: [Actors[0]],
  categories: [Categories[0]],
  description: "Description",
  title: "Parasites",
  release_year: 2019,
};

const FILM_GOLDFINGER: Film = {
  id: "3d3fe5e7-7366-41f6-a120-33a333f26adb",
  actors: [Actors[0], Actors[3], Actors[4]],
  categories: [Categories[1], Categories[2]],
  description: "Description",
  title: "Goldfinger",
  release_year: 1967,
};

const FILM_THUNDERBALL: Film = {
  id: "9039c688-6276-4bbe-a2f1-acf0b1aa4cae",
  actors: [Actors[0], Actors[1], Actors[2], Actors[3]],
  categories: [Categories[2], Categories[3]],
  description: "Description",
  title: "Thundeball",
  release_year: 1965,
};

const FILM_MOONRAKER: Film = {
  id: "ad9df744-9b1d-41f1-934c-c9b08060a693",
  actors: [Actors[0], Actors[1], Actors[3], Actors[5]],
  categories: [Categories[2], Categories[3]],
  description: "Description",
  title: "Moonraker",
  release_year: 1979,
};

const Films: Film[] = [
  FILM_PARASITES,
  FILM_GOLDFINGER,
  FILM_THUNDERBALL,
  FILM_MOONRAKER,
];

export default Films;
