const React = require('react');

const MovieForm = require('./movies-form')
const { listStyle, imgStyle, cardStyle, textStyle } = require('./styles/styles')

// testing connection to server
// fetch('/api/data')
//   .then(res => {
//     return res.json()
//   }).then(res => {
//     console.log(res)
//   })

// first component


const Movies = React.createClass({
  getInitialState(){
    return {movies: [], searchValue:''}
  },

  updateSearch(event) {
    var searchValue = event.target.value
    this.state.searchValue = searchValue
    return this.setState({searchValue:this.state.searchValue})
  },

  searchMovie(event){
    event.preventDefault();
    this.fetchMovies()
  },

  fetchMovies() {
    fetch(`http://www.omdbapi.com/?s=${this.state.searchValue}`)
      .then(res => {
        return res.json()
      }).then(res => {
        this.state.movies = res.Search
        this.setState(this.state)
      })
  },


  render() {
    var movies = this.state.movies.map((movie, key) => {
      return(
        <div key={key} className="card" style={cardStyle}>
          <img src={movie.Poster} className="card-img-top" style={imgStyle}/>
          <div className="card-block">
            <p style={textStyle}>
              <strong>{movie.Title + '  --  '}</strong>
              <span>{movie.Year}</span>
            </p>
          </div>

        </div>
      )
    })
    console.log(this.state.movies[0])

    return (
      <div className="container-fluid">
        <h2>Find a Movie</h2>
        <MovieForm
          onChange={this.updateSearch}
          onSearch={this.searchMovie} />
        <div style={listStyle}>
          {movies}
        </div>
      </div>
    )
  }
});

module.exports = Movies;
