import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import Film from "./film";

@Entity({ name: "category" })
class Category {
  @PrimaryColumn({ type: "uuid" })
  public id: string;

  @Column({ length: 64 })
  public name: string;

  @ManyToMany(() => Film, (film) => film.categories)
  public films: Film[];
}

export default Category;
