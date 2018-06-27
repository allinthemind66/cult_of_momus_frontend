document.addEventListener("DOMContentLoaded", function(){
  let moviesList = document.getElementById("moviesList");

  fetch('http://localhost:3000/api/v1/movies/')
  .then(resp => resp.json())
  .then(json => renderMoviesHTML(json))

  const renderMoviesToPage = (html) => {
    moviesList.innerHTML = html;
  };

  const renderMoviesHTML = (json) => {
    let htmlBlock = ''
    json.forEach(movie => {
      htmlBlock += `<a><li>${movie.title}</li></a>`
    });
    renderMoviesToPage(htmlBlock)
  };

})
