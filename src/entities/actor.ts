import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import Film from "./film";

@Entity({ name: "actor" })
class Actor {
  @PrimaryColumn({ type: "uuid" })
  public id: string;

  @Column({ length: 128 })
  public name: string;

  @ManyToMany(() => Film, (film) => film.categories)
  public films: Film[];
}

export default Actor;
