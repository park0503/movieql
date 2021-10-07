"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db/db");
const resolvers = {
    Query: {
        movies: () => (0, db_1.getMovies)(),
        movie: (_, { id }) => (0, db_1.getById)(id)
    },
    Mutation: {
        addMovie: (_, { name, score }) => (0, db_1.addMovie)(name, score),
        deleteMovie: (_, { id }) => (0, db_1.deleteMovie)(id),
    }
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map