import funcFilmes from "./tmdbapi.js";
import uiFunctions from "./ui.js";

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const language = "pt-br";
    const moviesData = await funcFilmes.fetchPopularMovies(language);
    const top10Movies = moviesData.results.slice(0, 10);

    const movieCards = await Promise.all(
      top10Movies.map(async (movie, index) => {
        const movieDetails = await funcFilmes.fetchMovieDetails(movie.id, language);
        return uiFunctions.criarCardFilme(movie, movieDetails, index);
      })
    );

    uiFunctions.exibirFilmes(movieCards);

     const toggleThemeButton = document.getElementById("toggleTheme");
     toggleThemeButton.addEventListener("click", () => {
       document.body.classList.toggle("dark-mode");
       toggleThemeButton.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
     });
     
  } catch (error) {
    console.error("Erro ao carregar os filmes:", error);
  }
});