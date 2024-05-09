import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
  const [currentSearch, setCurrentSearch] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [playlistItems, setPlaylistItems] = useState([]);

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearchSubmit} />
      <SearchResults
        query={currentSearch}
        hasSearched={hasSearched}
        onAddToPlaylist={handleAddToPlaylist}
      />
      <Playlist
        tracks={playlistItems}
        onRemoveFromPlaylist={handleRemoveFromPlaylist}
      />
    </div>
  );

  function handleSearchSubmit(query) {
    setCurrentSearch(query);
    setHasSearched(true);
  }
  function handleAddToPlaylist(track) {
    setPlaylistItems((nextPlaylistItems) => [...nextPlaylistItems, track]);
  }
  function handleRemoveFromPlaylist(id) {
    setPlaylistItems((nextPlaylistItems) =>
      nextPlaylistItems.filter((track) => track.id !== id)
    );
  }
}

export default App;
