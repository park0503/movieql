"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMovie = exports.deleteMovie = exports.getById = exports.getMovies = void 0;
let movies = [
    {
        id: 0,
        name: "Star Wars = The new one",
        score: 1
    },
    {
        id: 1,
        name: "Avengers - End Game",
        score: 8
    },
    {
        id: 2,
        name: "The Godfather",
        score: 99
    },
    {
        id: 3,
        name: "Logan",
        score: 2
    }
];
const getMovies = () => movies;
exports.getMovies = getMovies;
const getById = (id) => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
};
exports.getById = getById;
const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    }
    else {
        return false;
    }
};
exports.deleteMovie = deleteMovie;
const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};
exports.addMovie = addMovie;
//# sourceMappingURL=db.js.map