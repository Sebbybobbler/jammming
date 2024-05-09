import styles from "./SearchResults.module.css";
import Tracklist from "../Tracklist/Tracklist";
import { useEffect, useMemo, useState } from "react";
import { searchTracks } from "../assets/js/api";

export default function SearchResults({ query, onAddToPlaylist }) {
  const [results, setResults] = useState([]);
  const [isError, setIsError] = useState(false);

  const isQueryEmpty = useMemo(() => query.trim() === "", [query]);

  useEffect(() => {
    let abortController = new AbortController();
    (async () => {
      if (isQueryEmpty) {
        setResults([]);
        setIsError(false);
        return;
      }

      const newResults = await searchTracks(query, abortController.signal);
      setResults(newResults ?? []);
      setIsError(newResults == null);
    })();

    return () => abortController.abort();
  }, [query, isQueryEmpty]);

  return (
    <section>
      {isQueryEmpty ? (
        <p>Enter the name of a track to start Jamming.</p>
      ) : isError ? (
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
