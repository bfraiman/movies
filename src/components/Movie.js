import React from "react";
import PropTypes from "prop-types";

const Movie = ({ data }) => {
  const src = `https://image.tmdb.org/t/p/original/${data.poster_path}`
  return (
    <div className="movie">
    <img
      width="200"
      alt={data.title}
      src={src}
    />
    </div>
  );
};

Movie.propTypes = {
  data: PropTypes.shape({
    // title: PropTypes.string.isRequired,
    // overview: PropTypes.string.isRequired,
    // vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    // coverImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movie;
