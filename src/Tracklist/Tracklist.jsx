import Track from "../Track/Track";
import styles from "./Tracklist.module.css";

export default function Tracklist({ tracks, displayAsPlus, onButtonClick }) {
  return (
    <ul>
      {tracks.map((trackInfo, key) => (
        <li key={key}>
          <Track
            key={key}
            {...trackInfo}
            displayAsPlus={displayAsPlus}
            onButtonClick={() => handleButtonClick(key)}
          />
        </li>
      ))}
    </ul>
  );

  function handleButtonClick(id) {
    onButtonClick?.(id);
  }
}
