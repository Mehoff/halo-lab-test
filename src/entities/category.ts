import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import Film from "./film";

@Entity({ name: "category" })
class Category {
  @PrimaryColumn({ type: "uuid", select: false })
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
