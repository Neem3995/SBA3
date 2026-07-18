// Joseph Garcia
// SBA 316 - The Document Object Model

// -----------------------------
// Part 1 - Cache DOM Elements
// -----------------------------

const movieForm = document.getElementById("movie-form");
const movieList = document.getElementById("movie-list");
const movieTemplate = document.getElementById("movie-template");

const movieTitleInput = document.querySelector("#movie-title");
const movieGenreInput = document.querySelector("#movie-genre");
const movieRatingInput = document.querySelector("#movie-rating");
const movieFilter = document.querySelector("#movie-filter");
const movieCount = document.querySelector("#movie-count");
const titleError = document.querySelector("#title-error");
const ratingError = document.querySelector("#rating-error");

// -----------------------------
// Part 2 - Starter Movie Data
// -----------------------------

const movies = [
  {
    title: "Interstellar",
    genre: "Sci-Fi",
    rating: 10,
    watched: false,
  },
  {
    title: "Shrek",
    genre: "Comedy",
    rating: 9,
    watched: true,
  },
  {
    title: "Spider-Man 2",
    genre: "Action",
    rating: 9,
    watched: false,
  },
];

// -----------------------------
// Part 3 - Create Movie Cards
// -----------------------------

function createMovieCard(movie) {
  const movieCardClone = movieTemplate.content.cloneNode(true);

  const movieCard = movieCardClone.querySelector(".movie-card");

  // Parent-child-sibling navigation
  const movieTitle = movieCard.firstElementChild;
  const movieGenre = movieTitle.nextElementSibling;
  const movieRating = movieGenre.nextElementSibling;

  movieTitle.textContent = movie.title;
  movieGenre.textContent = `Genre: ${movie.genre}`;
  movieRating.textContent = `Rating: ${movie.rating}/10`;

  movieCard.setAttribute("data-title", movie.title.toLowerCase());
  movieCard.setAttribute(
    "data-status",
    movie.watched ? "watched" : "unwatched"
  );

  if (movie.watched) {
    movieCard.classList.add("watched");

    const watchedButton = movieCard.querySelector(".watched-btn");

    watchedButton.textContent = "Mark Unwatched";
    watchedButton.setAttribute(
      "title",
      "Mark this movie as not watched"
    );
  }

  movieList.prepend(movieCardClone);

  updateMovieCount();
  updateEmptyMessage();
}

// -----------------------------
// Part 4 - Display Starter Movies
// -----------------------------

movies.forEach(function (movie) {
  createMovieCard(movie);
});

// -----------------------------
// Part 5 - Update Movie Count
// -----------------------------

function updateMovieCount() {
  const movieCards = document.querySelectorAll(".movie-card");

  movieCount.textContent = `Movies: ${movieCards.length}`;
}

// -----------------------------
// Part 6 - Empty List Message
// -----------------------------

function updateEmptyMessage() {
  const movieCards = document.querySelectorAll(".movie-card");
  const currentEmptyMessage = document.querySelector("#empty-message");

  if (movieCards.length === 0 && !currentEmptyMessage) {
    const emptyMessage = document.createElement("p");

    emptyMessage.id = "empty-message";
    emptyMessage.textContent =
      "Your movie watchlist is empty. Add a movie above.";

    movieList.appendChild(emptyMessage);
  }

  if (movieCards.length > 0 && currentEmptyMessage) {
    currentEmptyMessage.remove();
  }
}