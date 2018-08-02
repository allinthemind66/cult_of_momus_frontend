// document.addEventListener("DOMContentLoaded", function(){
//   window.onpopstate = () => {
//   window.history.go(0);
// }

let movieId = 1
//create new pathname
//load content based on movieId
let pageWrapper = document.getElementById('movie-page-wrapper')
const routes = {
  '/src/movies.html': moviesList,
  '/src/moviePage': moviePage
};
// pageWrapper.innerHTML = routes[window.location.pathname];

window.onpopstate = () => {
  console.log(window.location.pathname)
  pageWrapper.innerHTML = routes[window.location.pathname];
}
let onButtonClick = (pathName) => {
  // debugger
  window.history.pushState({},pathName,`${pathName}`
  );
  console.log(pathName)
  pageWrapper.innerHTML = routes[pathName];
}


pageWrapper.innerHTML = routes[window.location.pathname];

// let FILELOCATION = '/Users/ricknilon/Development/MyProjects/cult_of_momus/cult_of_momus_frontend/src/'



//   let moviesList = document.getElementById("moviesList");
//   let movieInfoDiv = document.getElementById("movieInfo");
//   let movieId = null;
//
//   const movieClick = (pathName) => {
//     history.pushState({}, `#${pathName}`, `#${pathName}`);
//   };
//
//   async function getMovieData(){
//     try {
//       const response = await fetch('http://localhost:3000/api/v1/movies/');
//       if(response.ok){
//         const jsonResponse = await response.json();
//         renderMoviesHTML(jsonResponse);
//       };
//     }
//     catch(error){
//       console.log(error)
//     };
//   };
//
//   const renderMoviesToPage = (html) => {
//     moviesList.innerHTML = html;
//     let allMoviesOnPage = document.getElementsByClassName("movie");
//     for(let movie of allMoviesOnPage){
//       movie.addEventListener('click', () => {
//       movieId = movie.id.split("-")[1]
//       console.log(movieId)
//       getIndividualMovieData();
//       movieClick(`movies/${movieId}`)
//
//         });
//     };
//   };
//
//   async function getIndividualMovieData(){
//     try {
//       const response = await fetch('http://localhost:3000/api/v1/movies/' + movieId);
//       if(response.ok){
//         const jsonResponse = await response.json();
//         console.log(jsonResponse);
//         let movieClass = new Movie(jsonResponse.title, jsonResponse.director, jsonResponse.release_year, jsonResponse.rtscore);
//         let movieInfo = new MovieInfo();
//         console.log(movieClass.render(movieInfo.render()));
//         movieInfoDiv.innerHTML = movieClass.render(movieInfo.render());
//       };
//     }
//     catch(error){
//       console.log(error);
//     }
//   };
//
//   const renderMoviesHTML = (json) => {
//     let htmlBlock = '';
//     json.forEach(movie => {
//       htmlBlock += `<a id='movie-${movie.id}' class='movie'><li>${movie.title} - ${movie.release_year}</li></a>`
//     });
//     renderMoviesToPage(htmlBlock);
//   };
//   getMovieData();
// })
