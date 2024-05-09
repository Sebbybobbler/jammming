import logo from "../assets/images/logo.svg";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import Track from "../Track/Track";
import Tracklist from "../Tracklist/Tracklist";
import { useState } from "react";
import SearchResults from "../SearchResults/SearchResults";
import tracks from "../assets/js/test/songData";

function App() {
  const [currentSearch, setCurrentSearch] = useState("");

  return (
    <div className="App">
      <SearchBar onSubmit={(searchTerm) => setCurrentSearch(searchTerm)} />
      <SearchResults searchQuery={currentSearch} />
      <Tracklist tracks={tracks} />
    </div>
  );
}

export default App;
