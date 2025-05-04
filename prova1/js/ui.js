import { fetchMovieTrailer } from "./tmdbapi.js";

const criarCardFilme = ({ poster_path, title, release_date, overview, id }, { genres }, indice) => {
  const urlBase = "https://image.tmdb.org/t/p/w500";

  const containerFilme = document.createElement("div");
  containerFilme.classList.add("movieInfo");

  const posterFilme = document.createElement("img");
  posterFilme.src = `${urlBase}${poster_path}`;
  posterFilme.alt = `Poster de ${title}`;

  const textoFilme = document.createElement("div");
  textoFilme.classList.add("movieText");

  const posicao = document.createElement("p");
  posicao.classList.add("rank");
  posicao.textContent = indice + 1;

  const informacoes = document.createElement("div");
  informacoes.classList.add("info");

  const titulo = document.createElement("p");
  titulo.classList.add("title");
  titulo.textContent = title;

  const metadados = document.createElement("p");
  metadados.classList.add("metadata");
  const generos = genres.slice(0, 3).map((genre) => genre.name).join(", ");
  metadados.textContent = `${release_date?.substring(0, 4) || "Ano"} · ${generos || "Gênero"}`;

  const sinopse = document.createElement("div");
  sinopse.classList.add("sinopse");
  sinopse.textContent = overview || "Sinopse não disponível.";

  const botaoTrailer = document.createElement("button");
  botaoTrailer.textContent = "Ver Trailer";
  botaoTrailer.classList.add("trailerButton");
  botaoTrailer.addEventListener("click", async () => {
    const trailerUrl = await fetchMovieTrailer(id);
    if (trailerUrl) {
      const modal = document.getElementById("trailerModal");
      const iframe = document.getElementById("trailerIframe");

      iframe.src = trailerUrl.replace("watch?v=", "embed/"); 
      modal.style.display = "flex"; 
    } else {
      alert("Trailer não disponível.");
    }
  });

  sinopse.appendChild(botaoTrailer);

  informacoes.append(titulo, metadados);
  textoFilme.append(posicao, informacoes);
  containerFilme.append(posterFilme, textoFilme, sinopse);

  return containerFilme;
};

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("trailerModal");
  const closeButton = document.querySelector(".close-button");
  const iframe = document.getElementById("trailerIframe");

  closeButton.addEventListener("click", () => {
    modal.style.display = "none"; 
    iframe.src = ""; 
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      iframe.src = ""; 
    }
  });
});

const exibirFilmes = (filmes) => {
  const boxFilme = document.getElementById("boxMovie");
  if (!boxFilme) return; 
  boxFilme.innerHTML = ""; 
  filmes.forEach((filme) => boxFilme.appendChild(filme));
};

export default {
  criarCardFilme,
  exibirFilmes,
};
