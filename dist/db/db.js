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
exports.getSuggestions = exports.getMovie = exports.getMovies = void 0;
const axios_1 = require("axios");
const BASE_URL = "https://yts.mx/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;
const getMovies = (limit, rating) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { data: { movies } } } = yield (0, axios_1.default)(LIST_MOVIES_URL, {
        params: {
            limit,
            minimum_rating: rating
        }
    });
    return movies;
});
exports.getMovies = getMovies;
const getMovie = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { data: { movie } } } = yield (0, axios_1.default)(MOVIE_DETAILS_URL, {
        params: {
            movie_id: id
        }
    });
    return movie;
});
exports.getMovie = getMovie;
const getSuggestions = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { data: { movies } } } = yield (0, axios_1.default)(MOVIE_SUGGESTIONS_URL, {
        params: {
            movie_id: id
        }
    });
    return movies;
});
exports.getSuggestions = getSuggestions;
//# sourceMappingURL=db.js.map