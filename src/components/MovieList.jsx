import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';
import PropTypes from 'prop-types';

var MovieList = (props) => {
  return (
    <div class="MovieList">
      {props.movies.map((movie, i) =>
        <MovieListEntry movie={movie} key={i}/>
      )}
    </div>
  )
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
}
export default MovieList;
