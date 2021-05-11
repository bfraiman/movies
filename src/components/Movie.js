import React from "react";
import PropTypes from "prop-types";

const Movie = ({ data }) => {
  const src = `https://image.tmdb.org/t/p/original/${data.poster_path}`;
  return (
    <div className="movie">
      <img width="100px" height="140px" alt={data.title} src={src} />
      <div className="movie-overview">
        <p className="movie-overview-title">{data.title}</p>
      </div>
    </div>
  );
};

Movie.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    // overview: PropTypes.string.isRequired,
    // vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    // coverImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movie;
