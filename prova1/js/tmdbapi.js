const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2NlOTcyMTNlNDlmYTdiNWUyNTBhY2ZhZmRjMzQ0YiIsIm5iZiI6MS43MTMyOTk0MjcxNTkwMDAyZSs5LCJzdWIiOiI2NjFlZGZlMzIxNjIxYjAxN2RmMTA4MmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-4SvzsuEaMOrVQq87sMPJcZFbfv-aYjwcXuhFosfdB0";

const defaultOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: API_KEY,
  },
};

const fetchPopularMovies = async (language = "pt-br", page = 1) => {
  const response = await fetch(`${API_URL}/movie/popular?language=${language}&page=${page}`, defaultOptions);
  if (!response.ok) throw new Error(`Erro ao buscar filmes populares: ${response.statusText}`);
  return response.json();
};

const fetchMovieDetails = async (movieId, language = "pt-br") => {
  const response = await fetch(`${API_URL}/movie/${movieId}?language=${language}`, defaultOptions);
  if (!response.ok) throw new Error(`Erro ao buscar detalhes do filme: ${response.statusText}`);
  return response.json();
};

const fetchMovieTrailer = async (movieId, language = "en-US") => {
  const response = await fetch(`${API_URL}/movie/${movieId}/videos?language=${language}`, defaultOptions);
  if (!response.ok) throw new Error(`Erro ao buscar trailer do filme: ${response.statusText}`);
  const data = await response.json();

  const trailer = data.results.find(video => video.type === "Trailer" && video.site === "YouTube");
  return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
};

export { fetchMovieTrailer };

const funcFilmes = {
  fetchPopularMovies,
  fetchMovieDetails,
};

export default funcFilmes;