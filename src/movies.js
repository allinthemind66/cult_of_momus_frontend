document.addEventListener("DOMContentLoaded", function(){

  let moviesList = document.getElementById("moviesList");
  let movieInfoDiv = document.getElementById("movieInfo");
  let movieId = null;

  const movieClick = (pathName) => {
    history.pushState({}, `#${pathName}`, `#${pathName}`);
  };

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
      movieClick(`movies/${movieId}`)

        });
    };
  };

  async function getIndividualMovieData(){
    try {
      const response = await fetch('http://localhost:3000/api/v1/movies/' + movieId);
      if(response.ok){
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        let movieClass = new Movie(jsonResponse.title, jsonResponse.director, jsonResponse.release_year, jsonResponse.rtscore);
        let movieInfo = new MovieInfo();
        console.log(movieClass.render(movieInfo.render()));
        movieInfoDiv.innerHTML = movieClass.render(movieInfo.render());
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
