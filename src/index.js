// document.addEventListener("DOMContentLoaded", () => {
//
//   console.log("Hello fellow bad movie fans!");
//   let movieForm = document.getElementById('movie-form')
//   // console.log(movieForm);
//   // debugger
//   let handleFormSubmit = (event) => {
//     event.preventDefault()
//     // console.log(event.target.children[10].value);
//   let movieTitle = (event.target.children[1].value);
//   let movieYear = (event.target.children[4].value);
//   let movieDirector = (event.target.children[7].value);
//   let movieRTScore = (event.target.children[10].value);
//     let formData = {
//       title: movieTitle,
//       release_year: movieYear,
//       director: movieDirector,
//       rtscore: movieRTScore
//     }
//     fetch("http://localhost:3000/api/v1/movies/", {
//       method: "POST",
//       body: JSON.stringify(formData),
//       headers: ({
//     'Content-Type': 'application/json'
//   })
//     })
//
//   }
//
//
//   movieForm.addEventListener('submit', handleFormSubmit)
//
// })
