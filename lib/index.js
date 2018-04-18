"use strict";

document.addEventListener("DOMContentLoaded", function () {

  console.log("Hello fellow bad movie fans!");
  var movieForm = document.getElementById('movie-form');
  // console.log(movieForm);
  // debugger
  var handleFormSubmit = function handleFormSubmit(event) {
    event.preventDefault();
    // console.log(event.target.children[10].value);
    var movieTitle = event.target.children[1].value;
    var movieYear = event.target.children[4].value;
    var movieDirector = event.target.children[7].value;
    var movieRTScore = event.target.children[10].value;
    var formData = {
      title: movieTitle,
      release_year: movieYear,
      director: movieDirector,
      rtscore: movieRTScore
    };
    fetch("http://localhost:3000/api/v1/movies/", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };

  movieForm.addEventListener('submit', handleFormSubmit);
});