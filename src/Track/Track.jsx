import styles from "./Track.module.css";

export default function Track({ name, artist, album, displayAsPlus }) {
  return (
    <>
      <h3>{name}</h3>
      <div>
        <span>
          {artist} | {album}
        </span>
        <button type="button">{displayAsPlus ? "+" : "-"}</button>
      </div>
    </>
  );
}
