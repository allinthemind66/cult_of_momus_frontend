class Movie {
  constructor(name, director, releaseDate, rottenScore){
    this.name = name
    this.director = director
    this.releaseDate = releaseDate
    this.rottenScore = rottenScore
  }
  render(movieInfo){
    return(`
      <div>
        <h1>${this.name}</h1>
        <a href='/src/movies.html'>Back To Movies</a>
        <p>Directed by ${this.director} </p>
        <p>Release Year: ${this.releaseDate}</p>
        <p>Rotten Tomatoes Score: ${this.rottenScore}%</p>
        <div>
          ${movieInfo}
        </div>
      </div>
    `)
  }
}
