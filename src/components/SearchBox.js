import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Movies from "../components/Movies";
import buildURL from "../utils/buildURL";
import useDebounce from "../utils/debounce";

const DEFAULT_LANGUAGE = "en-US";
const MOVIES_DEFAULT_STATE = {
  data: [],
  isLoading: false,
  errorMessage: "",
};
const DEBOUNCE_DELAY = 400;

const SearchBox = ({ placeholder }) => {
  const [isVisiblePanel, setIsVisiblePanel] = useState(false);
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(MOVIES_DEFAULT_STATE);

  const debouncedQuery = useDebounce(query, DEBOUNCE_DELAY);

  useEffect(() => {
    if (debouncedQuery) {
      fetchMovies();
    }
  }, [debouncedQuery]);

  const onChange = (e) => {
    setMovies({
      isLoading: true,
      data: [],
      errorMessage: "",
    });

    setQuery(e.target.value);
  };

  const handlePanel = () => {
      setIsVisiblePanel(!isVisiblePanel);
  };

  const fetchMovies = () => {
    const params = {
      api_key: process.env.REACT_APP_MOVIES_API_KEY,
      language: DEFAULT_LANGUAGE,
      query,
    };

    const url = buildURL(process.env.REACT_APP_MOVIES_API_URL, params);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const { results } = data;

        setMovies({
          isLoading: false,
          data: results,
          errorMessage: "",
        });
      })
      .catch((e) => {
        setMovies({
          isLoading: false,
          data: [],
          errorMessage: e.message,
        });
      });
  };

  return (
    <div className="search-box">
      <input
        onChange={onChange}
        type="text"
        value={query}
        placeholder={placeholder}
        onFocus={handlePanel}
        onBlur={handlePanel}
      />
      {isVisiblePanel && query && (
        <div className="search-box-panel">
          <Movies movies={movies} />
        </div>
      )}
    </div>
  );
};

SearchBox.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default SearchBox;
