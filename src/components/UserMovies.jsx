import React from 'react';


var AddMovie = (props) => {
  console.log('props from user movies:',props)
  return (
    <form onSubmit={props.onAddMovie}>
      <input type="text" className="inputBox" name="movie-input" onChange={props.onAddMovieChange}/>
      <button className="button">Add</button>
    </form>
  )
}

export default AddMovie;