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
      moviesData: exampleMoviesData
      // userMovies: ''
      // errorMessage: errorMessage
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange(event) {
    // this.setState({moviesSubmit: exampleMoviesData})
    if (event.target.value === '') {
      this.setState({moviesData: exampleMoviesData});
    }
    this.setState({value: event.target.value.toLowerCase()}, function(){console.log('cb state:', this.state)});

  }
  // handleError(event) {
  //   if (!handleSubmit(event)) {
  //     this.setState(errorMessage: )
  //   }
  // }
  handleSubmit(event) {
    event.preventDefault();
    // this.setState({moviesSubmit: exampleMoviesData})
    var result = [];
    for (var i = 0; i < this.state.moviesData.length; i++) {
      var movieTitle = this.state.moviesData[i].title.toLowerCase();
      if (movieTitle.indexOf(this.state.value) !== -1) {
        result.push(this.state.moviesData[i]);
      }
    }
    // if (result.length === 0) {
    //   this.setState(moviesData: {});
    // }
      this.setState({moviesData: result}, function() {
        console.log('current movie data:',this.state.moviesData);
      });
    // console.log('result:', result)
  }

  addMovie(event) {
    // when a user clicks submit I want to take the input, create an object for it, and add it to an array, change the state to display user movies only.
    var input = {title: event.target.value}
    userMoviesInput.push(input);
    console.log('event from addMovie:', event)
    console.log('input from addMovie:', input)
    this.setState({
      moviesData: userMoviesInput
    })
  }
  render() {
    return (
      <div>
        <div className="title">Movie List</div>
        <div className="add-movie">
          <AddMovie onAddMovie={this.addMovie} />
        </div>
        <div className="search">
          <Searchbar search={exampleMoviesData} onChange={this.handleChange} onSearch={this.handleSubmit} />
        </div>
        <div>
          <MovieList movies={this.state.moviesData} />
        </div>
        {/* <div class="error">

        </div> */}
      </div>
    );
  }
}

export default App;
