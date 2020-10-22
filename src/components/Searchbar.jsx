import React from 'react';
import exampleMoviesData from '../data/Movies.example.js';

var Searchbar = (props) => {

  return (
    <form onSubmit={props.onSearch}>
      <input type="text" className="inputBox" name="searchbar" onChange={props.onInputChange}/>
      <button className="button" >Search</button>
    </form>
  )
}

// Searchbar.propTypes = {
//   search: PropTypes.string.isRequired
// }

export default Searchbar;