import React from 'react';
import exampleMoviesData from '../data/Movies.example.js';
import MovieList from './MovieList.jsx';
import MovieListEntry from './MovieListEntry.jsx';
import Searchbar from './Searchbar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: exampleMoviesData[0]
    };
  }
  render() {
    return (
      <div>
        <div class="title">Movie List</div>
        <div>
          <MovieList movies={exampleMoviesData} />
        </div>
      </div>
    );
  }
}

export default App;
