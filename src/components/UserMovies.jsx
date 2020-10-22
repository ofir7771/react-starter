import React from 'react';


var AddMovie = (props) => {
  return (
    <form onSubmit={props.onAddMovie}>
      <input type="text" className="inputBox" name="movie-input" placeholder="Add a movie" onChange={props.onAddMovieChange}/>
      <button className="button">Add</button>
    </form>
  )
}

export default AddMovie;