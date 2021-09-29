import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Accessories } from "../../entity/Accessories";

@Resolver()
export class AccessoryResolver {
  @Query(() => String)
  async hello() {
    return "hello world";
  }

  @Query(() => [Accessories])
  async getAccessories() {
    return Accessories.find();
  }

  @Mutation(() => Accessories)
  async Accessory(
    @Arg("accessoryName") accessoryName: string
  ): Promise<Accessories> {
    const accessory = await Accessories.create({
      accessoryName,
    }).save();
    return accessory;
  }
}
