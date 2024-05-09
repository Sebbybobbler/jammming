import { ACCESS_TOKEN } from "../secrets";

const tracks = [
  {
    name: "Creep",
    artist: "Radiohead",
    album: "Pablo Honey",
  },
];

const urlObj = new URL("https://api.spotify.com/v1/search");
urlObj.searchParams.set("q", "radiohead");
urlObj.searchParams.set("type", "track");
fetch(urlObj, {
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("API request failed");
    }
  })
  .then((data) => {
    console.log(data);
  });

export default tracks;
