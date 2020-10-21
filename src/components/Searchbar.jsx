import exampleMoviesData from '../data/Movies.example.js';

var Searchbar (props) => {
  return (
    <form>
      <input type="text" id="search" name="searchbar">
    </form>
  )
}

Searchbar.propTypes = {
  search: PropTypes.string.isRequired
}

export default Searchbar;