"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApolloServer = void 0;
const apollo_server_1 = require("apollo-server");
const schemas_1 = __importDefault(require("./graphql/schemas"));
const resolvers_1 = __importDefault(require("./graphql/resolvers"));
const createApolloServer = () => {
    return new apollo_server_1.ApolloServer({ typeDefs: schemas_1.default, resolvers: resolvers_1.default });
};
exports.createApolloServer = createApolloServer;
(0, exports.createApolloServer)();
//# sourceMappingURL=server.js.map