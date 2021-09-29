"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const Express = require("express");
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Product_1 = require("./modules/user/Product");
const cors = require("cors");
const Motor_1 = require("./modules/user/Motor");
const Accessories_1 = require("./modules/user/Accessories");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, typeorm_1.createConnection)();
    const schema = yield (0, type_graphql_1.buildSchema)({
        resolvers: [Product_1.ProductResolver, Motor_1.MotorResolver, Accessories_1.AccessoryResolver],
    });
    const apolloserver = new apollo_server_express_1.ApolloServer({ schema });
    const app = Express();
    yield apolloserver.start();
    apolloserver.applyMiddleware({ app });
    app.use(cors());
    app.listen(4000, () => {
        console.log("server started on http://localhost:4000/graphql");
    });
});
main();
//# sourceMappingURL=index.js.map