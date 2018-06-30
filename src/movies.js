document.addEventListener("DOMContentLoaded", function(){
  let moviesList = document.getElementById("moviesList");
  let movieInfo = document.getElementById("movieInfo");
  let movieId = null;

  async function getMovieData(){
    try {
      const response = await fetch('http://localhost:3000/api/v1/movies/');
      if(response.ok){
        const jsonResponse = await response.json();
        renderMoviesHTML(jsonResponse);
      };
    }
    catch(error){
      console.log(error)
    };
  };

  const renderMoviesToPage = (html) => {
    moviesList.innerHTML = html;
    let allMoviesOnPage = document.getElementsByClassName("movie");
    for(let movie of allMoviesOnPage){
      movie.addEventListener('click', () => {
      movieId = movie.id.split("-")[1]
      console.log(movieId)
      getIndividualMovieData();
        });
    };
  };

  async function getIndividualMovieData(){
    try {
      const response = await fetch('http://localhost:3000/api/v1/movies/' + movieId);
      if(response.ok){
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        let movieClass = new Movie(jsonResponse.title)
        console.log(movieClass.render());
        movieInfo.innerHTML = movieClass.render();
      };
    }
    catch(error){
      console.log(error);
    }
  };

  const renderMoviesHTML = (json) => {
    let htmlBlock = '';
    json.forEach(movie => {
      htmlBlock += `<a id='movie-${movie.id}' class='movie'><li>${movie.title} - ${movie.release_year}</li></a>`
    });
    renderMoviesToPage(htmlBlock);
  };
  getMovieData();
})
