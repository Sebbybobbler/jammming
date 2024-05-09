import Track from "../Track/Track";
import styles from "./Tracklist.module.css";

export default function Tracklist({ tracks, displayAsPlus }) {
  return (
    <ul>
      {tracks.map((trackInfo, key) => (
        <li key={key}>
          <Track key={key} {...trackInfo} displayAsPlus={displayAsPlus} />
        </li>
      ))}
    </ul>
  );
}
