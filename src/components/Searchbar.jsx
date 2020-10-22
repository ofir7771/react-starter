import React from 'react';
import exampleMoviesData from '../data/Movies.example.js';


var Searchbar = (props) => {

  return (
    <form onSubmit={props.onSubmit}>
      <input type="text" class="search" name="searchbar" onChange={props.onChange}/>
      <button className="button" >Go</button>
    </form>
  )
}

// Searchbar.propTypes = {
//   search: PropTypes.string.isRequired
// }

export default Searchbar;