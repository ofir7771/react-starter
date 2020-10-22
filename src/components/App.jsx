import React from 'react';
import exampleMoviesData from '../data/Movies.example.js';
import MovieList from './MovieList.jsx';
import MovieListEntry from './MovieListEntry.jsx';
import Searchbar from './Searchbar.jsx';
import AddMovie from './UserMovies.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      moviesData: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value.toLowerCase()}, function(){console.log('cb state:', this.state)});

  }
  handleSubmit(event) {
    event.preventDefault();
    var result = [];
    for (var i = 0; i < this.state.moviesData.length; i++) {
      var movieTitle = this.state.moviesData[i].title.toLowerCase();
      if (movieTitle.indexOf(this.state.value) !== -1) {
        result.push(this.state.moviesData[i]);
      }
    }
      this.setState({moviesData: result}, function() {
        console.log('current movie data:',this.state.moviesData);
      });
  }

  addMovie(event) {
    event.preventDefault();
    var array = [...this.state.moviesData, {title: this.state.value}]
    this.setState({
      moviesData: array
    })
  }

  render() {
    return (
      <div>
        <div className="title">Movie List</div>
        <div className="add-movie">
          <AddMovie onAddMovie={this.addMovie} onAddMovieChange={this.handleChange}/>
        </div>
        <div className="search">
          <Searchbar  onInputChange={this.handleChange} onSearch={this.handleSubmit} />
        </div>
        <div>
          <MovieList movies={this.state.moviesData} />
        </div>
      </div>
    );
  }
}

export default App;
