import React from 'react';


var AddMovie = (props) => {
  console.log(props)
  return (
    <form onSubmit={props.onAddMovie}>
      <input type="text" className="inputBox" name="movie-input"/>
      <button className="button">Add</button>
    </form>
  )
}

export default AddMovie;