import styles from "./Track.module.css";

export default function Track({ name, artist, album }) {
  return (
    <>
      <h3>{name}</h3>
      <p>
        {artist} | {album}
      </p>
    </>
  );
}
