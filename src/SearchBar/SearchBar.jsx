import styles from "./SearchBar.module.css";
import Tracklist from "../Tracklist/Tracklist";
import { useState } from "react";

export default function SearchBar({ onSubmit }) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Search
            <input
              type="search"
              name="search"
              size="15"
              value={searchInput}
              onChange={handleChange}
            />
          </label>
          <button type="submit" value="submit">
            &#x1F50E;&#xFE0E;
          </button>
        </form>
      </div>
    </>
  );

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(searchInput);
  }
  function handleChange(event) {
    setSearchInput(event.target.value);
  }
}
