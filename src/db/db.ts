const API_URL = "https://yts.mx/api/v2/list_movies.json";



export const getMovies = async(limit:number, rating:number) => {
  let movies = await (await fetch(`${API_URL}`)).json();
  movies = movies.data.movies;
  return movies;
}
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