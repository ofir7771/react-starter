import React from 'react';
import exampleMoviesData from '../data/Movies.example.js';
import MovieList from './MovieList.jsx';
import MovieListEntry from './MovieListEntry.jsx';
import Searchbar from './Searchbar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      moviesData: exampleMoviesData
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // this.setState({moviesSubmit: exampleMoviesData})
    if (event.target.value === '') {
      this.setState({moviesData: exampleMoviesData});
    }
    this.setState({value: event.target.value.toLowerCase()}, function(){console.log('cb state:', this.state)});

  }

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
    if (result.length === 0) {
      console.log('<h1>results not found</h1>')
    }
      this.setState({moviesData: result}, function() {
        console.log('current movie data:',this.state.moviesData)
      });


    console.log('result:', result)
  }
  // if there is no input - display the initial movies
  // if there is input - compare to my movies

  render() {
    return (
      <div>
        <div className="title">Movie List</div>
        <div className="search">
          <Searchbar search={exampleMoviesData} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
        </div>
        <div>
          <MovieList movies={this.state.moviesData} />
        </div>
      </div>
    );
  }
}

export default App;
