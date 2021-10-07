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
exports.getMovies = void 0;
const API_URL = "https://yts.mx/api/v2/list_movies.json";
const getMovies = (limit, rating) => __awaiter(void 0, void 0, void 0, function* () {
    let movies = yield (yield fetch(`${API_URL}`)).json();
    movies = movies.data.movies;
    return movies;
});
exports.getMovies = getMovies;
/*
export const getById = (id:number) => {
  const filteredMovies = movies.filter(movie => movie.id === id);
  return filteredMovies[0];
}

export const deleteMovie = (id:number) => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name: string, score: number) => {
  const newMovie = {
    id: movies.length,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
*/ 
//# sourceMappingURL=db.js.map