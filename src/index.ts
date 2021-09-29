import { ApolloServer } from "apollo-server-express";
import * as Express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { AccessoryResolver } from "./modules/user/Accessories";
import { MotorResolver } from "./modules/user/Motor";
import { ProductResolver } from "./modules/user/Product";
import cors = require("cors");
import { Motor } from "./entity/Motor";
import { Accessories } from "./entity/Accessories";
const main = async () => {
  createConnection().then(async (connection) => {
    let access = new Accessories();
    access.accessoryName = "Wifibox";
    await connection.manager.save(access);

    let motor = new Motor();
    motor.motorName = "Draper ER";
    motor.access = [access];

    await connection.manager.save(motor);
  });
  const schema = await buildSchema({
    resolvers: [MotorResolver, ProductResolver, AccessoryResolver],
  });

  const apolloserver = new ApolloServer({ schema });

  const app = Express();
  await apolloserver.start();
  apolloserver.applyMiddleware({ app });

  app.use(cors());
  app.listen(4000, () => {
    console.log("server started on http://localhost:4000/graphql");
  });
};

main();
