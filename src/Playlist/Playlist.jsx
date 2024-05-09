import Tracklist from "../Tracklist/Tracklist";
import styles from "./Playlist.module.css";

export default function Playlist({ tracks, onRemoveFromPlaylist }) {
  return (
    <section>
      <Tracklist
        tracks={tracks}
        displayAsPlus={false}
        onButtonClick={handleTrackClick}
      />
      <button type="button">Save To Spotify</button>
    </section>
  );

  function handleTrackClick(id) {
    onRemoveFromPlaylist?.(tracks[id].id);
  }
}
