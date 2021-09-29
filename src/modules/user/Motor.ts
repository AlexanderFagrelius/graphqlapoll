import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Motor } from "../../entity/Motor";

@Resolver()
export class MotorResolver {
  @Query(() => String)
  async MotorQuery() {
    return;
  }

  @Mutation(() => Motor)
  async Motor(@Arg("motorName") motorName: string): Promise<Motor> {
    const motor = await Motor.create({
      motorName,
    }).save();
    return motor;
  }
}
