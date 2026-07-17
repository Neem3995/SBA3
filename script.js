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