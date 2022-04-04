import Category from "../../entities/category";

const CATEGORY_HORROR: Category = {
  id: "16cdcc83-185f-4ba2-8e42-c3225ff15a9f",
  name: "Horror",
};
const CATEGORY_DOCUMENTARY: Category = {
  id: "5e900b61-12ba-4be0-b0cc-203aec325177",
  name: "Documentary",
};
const CATEGORY_COMEDY: Category = {
  id: "e909f63f-7dc1-4f88-b5ba-eaf3f50b70d2",
  name: "Comedy",
};

const Categories: Category[] = [
  CATEGORY_HORROR,
  CATEGORY_DOCUMENTARY,
  CATEGORY_COMEDY,
];

export default Categories;
