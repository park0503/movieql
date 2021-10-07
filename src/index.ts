import { GraphQLServer } from 'graphql-yoga'
// ... or using `require()`
//const { GraphQLServer } = require('graphql-yoga');
//const { resolvers } = require('./graphql/resolvers');
import resolvers from './graphql/resolvers';

const typeDefs = "./src/graphql/schema.graphql"

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log('Graphql Server Running'));