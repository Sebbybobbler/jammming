import styles from "./SearchResults.module.css";
import Tracklist from "../Tracklist/Tracklist";
import { useEffect, useState } from "react";
import { searchTracks } from "../assets/js/api";

export default function SearchResults({ query, hasSearched, onAddToPlaylist }) {
  const [results, setResults] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let abortController = new AbortController();
    (async () => {
      if (!hasSearched) {
        setResults([]);
        setIsError(false);
        return;
      }

      const newResults = await searchTracks(query, abortController.signal);
      setResults(newResults ?? []);
      setIsError(newResults == null);
    })();

    return () => abortController.abort();
  }, [query]);

  return (
    <section>
      {isError ? (
        <p>An error occurred, please try again.</p>
      ) : (
        <Tracklist
          tracks={results}
          displayAsPlus={true}
          onButtonClick={handleTrackClick}
        />
      )}
    </section>
  );

  function handleTrackClick(id) {
    onAddToPlaylist?.(results[id]);
  }
}
