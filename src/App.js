import React, { useEffect, useState } from "react";
import Movies from "./components/Movies";
import Search from "./components/Search";
import buildURL from "./utils/buildURL";
import useDebounce from "./utils/debounce";
import "./App.css";

const DEFAULT_LANGUAGE = "en-US";
const MOVIES_DEFAULT_STATE = {
  data: [],
  isLoading: false,
  errorMessage: "",
};
const DEBOUNCE_DELAY = 400

function App() {
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
    <div className="App">
      <Search onChange={onChange} placeholder="Type to search" value={query}/>
      <Movies movies={movies} />
    </div>
  );
}

export default App;
