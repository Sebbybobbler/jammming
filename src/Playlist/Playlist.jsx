import Tracklist from "../Tracklist/Tracklist";
import { savePlaylist } from "../assets/js/api";
import styles from "./Playlist.module.css";

export default function Playlist({ tracks, onRemoveFromPlaylist }) {
  return (
    <section>
      <Tracklist
        tracks={tracks}
        displayAsPlus={false}
        onButtonClick={handleTrackClick}
      />
      <button type="button" onClick={handleSaveToSpotify}>
        Save To Spotify
      </button>
    </section>
  );

  function handleTrackClick(id) {
    onRemoveFromPlaylist?.(tracks[id].id);
  }
  function handleSaveToSpotify() {
    savePlaylist("Test", tracks);
  }
}
