import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Actor from "./actor";
import Category from "./category";

@Entity({ name: "film" })
class Film {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({ unique: true, length: 128 })
  public title: string;

  @Column({ length: 512 })
  public description: string;

  @ManyToMany(() => Category, (category) => category.films, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinTable()
  public categories: Category[];

  @ManyToMany(() => Actor, (actor) => actor.films, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinTable()
  public actors: Actor[];

  @Column()
  public release_year: number;
}

export default Film;
