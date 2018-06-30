class Movie {
  constructor(name){
    this.name = name
  }
  render(){
    return(`
      <div>
        <p>The name of the movie is: ${this.name}</p>
        <p>The Director is: </p>
        <p>The year this movie was released was: </p>
      </div>
    `)
  }
}
