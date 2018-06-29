document.addEventListener("DOMContentLoaded", function(){
  let moviesList = document.getElementById("moviesList");


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
      history.pushState(null,null, `#/moviespage/${movie.id.split('-')[1]}`)
        });
    };
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
