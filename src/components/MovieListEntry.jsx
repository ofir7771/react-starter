import React from 'react';
import exampleMoviesData from '../data/Movies.example.js';
import PropTypes from 'prop-types';

var MovieListEntry = (props) => {
  // console.log('props from movieList Entry:', props)
  return (
    <div>
      <div className="movie-list-entry-title">{props.movie.title}</div>
    </div>
  )
}

MovieListEntry.propTypes = {
  movie: PropTypes.object.isRequired
}

export default MovieListEntry;

