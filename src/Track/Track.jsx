import styles from "./Track.module.css";

export default function Track({
  name,
  artist,
  album,
  displayAsPlus,
  onButtonClick,
}) {
  return (
    <>
      <h3>{name}</h3>
      <div>
        <span>
          {artist} | {album}
        </span>
        <button type="button" onClick={onButtonClick}>
          {displayAsPlus ? "+" : "-"}
        </button>
      </div>
    </>
  );
}
