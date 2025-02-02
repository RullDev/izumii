const SPOTIFY_TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const SPOTIFY_NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';

export interface SpotifyNowPlaying {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  lyrics?: string;
}

async function getAccessToken(): Promise<string> {
  const response = await fetch('/api/spotify/token');
  const data = await response.json();
  return data.access_token;
}

export async function getNowPlaying(): Promise<SpotifyNowPlaying> {
  const accessToken = await getAccessToken();
  const response = await fetch(SPOTIFY_NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 204) {
    return { isPlaying: false };
  }

  const data = await response.json();

  return {
    isPlaying: data.is_playing,
    title: data.item?.name,
    artist: data.item?.artists.map((artist: any) => artist.name).join(', '),
    album: data.item?.album.name,
    albumImageUrl: data.item?.album.images[0]?.url,
    lyrics: "See what I'm currently listening on Spotify", // Mock lyrics for now
  };
}