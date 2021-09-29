import { Motor } from "./Motor";
import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Accessories extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ unique: true })
  accessoryName: string;

  @ManyToMany(() => Motor, (motor) => motor.access)
  @Field(() => [Motor])
  motor: Motor[];
}
