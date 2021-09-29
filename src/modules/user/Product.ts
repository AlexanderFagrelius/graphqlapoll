import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Product } from "../../entity/Product";

@Resolver()
export class ProductResolver {
  @Query(() => String)
  async hello() {
    return "hello world";
  }

  @Mutation(() => Product)
  async Product(@Arg("prodName") prodName: string): Promise<Product> {
    const product = await Product.create({
      prodName,
    }).save();
    return product;
  }
}
