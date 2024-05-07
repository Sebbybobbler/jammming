import Track from "../Track/Track";
import styles from "./Tracklist.module.css";

export default function Tracklist({ tracks }) {
  return (
    <ul>
      {tracks.map((trackInfo, key) => (
        <li key={key}>
          <Track key={key} {...trackInfo} />
        </li>
      ))}
    </ul>
  );
}
