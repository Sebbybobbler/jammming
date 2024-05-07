import logo from '../assets/images/logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Track from '../Track/Track';
import Tracklist from '../Tracklist/Tracklist';
import {useState} from "react";

function App() {
  const [searchItem, setSearchItem]=useState("");

  return (
    <div className="App">
      <SearchBar searchInput={searchItem} />
      <Tracklist/>
      <Track />
    </div>
  );
}

export default App;
