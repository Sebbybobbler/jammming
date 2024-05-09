import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
  const [currentSearch, setCurrentSearch] = useState("");
  const [playlistItems, setPlaylistItems] = useState([]);

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearchSubmit} />
      <div className="results-and-playlist">
        <SearchResults
          query={currentSearch}
          onAddToPlaylist={handleAddToPlaylist}
        />
        <Playlist
          tracks={playlistItems}
          onRemoveFromPlaylist={handleRemoveFromPlaylist}
        />
      </div>
    </div>
  );

  function handleSearchSubmit(query) {
    setCurrentSearch(query);
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
