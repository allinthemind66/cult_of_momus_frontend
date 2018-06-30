class Movie {
  constructor(name, director, releaseDate, rottenScore){
    this.name = name
    this.director = director
    this.releaseDate = releaseDate
    this.rottenScore = rottenScore
  }
  render(){
    return(`
      <div>
        <p>The name of the movie is: ${this.name}</p>
        <p>The Director is: ${this.director} </p>
        <p>The year this movie was released was: ${this.releaseDate}</p>
        <p>Rotten Tomato's Rating: ${this.rottenScore}</p>
      </div>
    `)
  }
}
