import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import Film from "./film";

@Entity({ name: "actor" })
class Actor {
  @PrimaryColumn({ type: "uuid", select: false })
  public id?: string;

  @Column({ length: 128 })
  public name: string;

  @ManyToMany(() => Film, (film) => film.categories, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  public films?: Film[];
}

export default Actor;
