"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_yoga_1 = require("graphql-yoga");
// ... or using `require()`
//const { GraphQLServer } = require('graphql-yoga');
//const { resolvers } = require('./graphql/resolvers');
const resolvers_1 = require("./graphql/resolvers");
const typeDefs = "./src/graphql/schema.graphql";
const server = new graphql_yoga_1.GraphQLServer({ typeDefs, resolvers: resolvers_1.default });
server.start(() => console.log('Graphql Server Running'));
//# sourceMappingURL=index.js.map