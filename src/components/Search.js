import React from "react";
import PropTypes from "prop-types";

const Search = ({ onChange, value, placeholder }) => {
  return (
    <input
      autoFocus
      onChange={onChange}
      type="text"
      value={value}
      placeholder={placeholder}
    />
  );
};

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Search;
