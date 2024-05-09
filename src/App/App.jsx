import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import Tracklist from "../Tracklist/Tracklist";
import { useState } from "react";
import SearchResults from "../SearchResults/SearchResults";

function App() {
  const [currentSearch, setCurrentSearch] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearchSubmit} />
      <SearchResults query={currentSearch} hasSearched={hasSearched} />
    </div>
  );

  function handleSearchSubmit(query) {
    setCurrentSearch(query);
    setHasSearched(true);
  }
}

export default App;
