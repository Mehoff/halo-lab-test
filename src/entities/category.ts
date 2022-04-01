import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import Film from "./film";

@Entity({ name: "category" })
class Category {
  @PrimaryGeneratedColumn("uuid")
  public id?: string;

  @Column({ length: 64 })
  public name: string;

  @ManyToMany(() => Film, (film) => film.categories, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  public films?: Film[];
}

export default Category;
