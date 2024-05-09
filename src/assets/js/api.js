import { ACCESS_TOKEN, USERNAME } from "./secrets";

export async function searchTracks(query, signal) {
  const urlObj = new URL("https://api.spotify.com/v1/search");
  urlObj.searchParams.set("q", query);
  urlObj.searchParams.set("type", "track");

  let res;
  try {
    res = await fetch(urlObj, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      signal,
    });
  } catch {}
  if (!res?.ok) {
    res?.body.cancel();
    return null;
  }

  let jsonRes;
  try {
    jsonRes = await res.json();
  } catch {
    return null;
  }

  return jsonRes.tracks.items.map((item) => ({
    name: item.name,
    album: item.album.name,
    artist: item.artists[0].name,
    id: item.id,
  }));
}

export async function savePlaylist(name, trackIDs) {
  const res = await fetch(
    `https://api.spotify.com/v1/users/${USERNAME}/playlists`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        name,
      }),
    }
  );
  console.log(await res.text());
}
