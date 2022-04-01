import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import Actor from "./actor";
import Category from "./category";

@Entity({ name: "film" })
class Film {
  @PrimaryColumn({ type: "uuid" })
  public id: string;

  @Column({ unique: true, length: 128 })
  public title: string;

  @Column({ length: 512 })
  public description: string;

  @ManyToMany(() => Category, (category) => category.films)
  @JoinTable()
  public categories: Category[];

  @ManyToMany(() => Actor, (actor) => actor.films)
  @JoinTable()
  public actors: Actor[];

  @Column()
  public release_year: number;
}

export default Film;
