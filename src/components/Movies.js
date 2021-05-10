import React from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";

const Movies = ({ movies }) => {
  const { data, isLoading, errorMessage } = movies;

  if (data.length > 0) {
    return (
      <div className="movies">
        {data.map((movie) => (
          <Movie key={movie.id} data={movie} />
        ))}
      </div>
    );
  }

  if(isLoading){
    return <h3>Cargando..</h3>;
  }

  return <h3>{errorMessage || "No results"}</h3>;
};

Movies.propTypes = {
  movies: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movies;
