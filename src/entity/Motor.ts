import { Accessories } from "./Accessories";
import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Motor extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  motorName: string;

  @ManyToMany(() => Accessories, (access) => access.motor)
  @JoinTable()
  @Field(() => [Accessories])
  access: Accessories[];
}
