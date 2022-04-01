import {
  Column,
  Entity,
  ManyToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import Film from "./film";

@Entity({ name: "category" })
class Category {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({ length: 64 })
  public name: string;

  @ManyToMany(() => Film, (film) => film.categories)
  public films: Film[];
}

export default Category;
