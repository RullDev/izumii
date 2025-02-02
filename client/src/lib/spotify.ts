const SPOTIFY_NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';

export interface SpotifyNowPlaying {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
}

export async function getNowPlaying(accessToken: string): Promise<SpotifyNowPlaying> {
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
    isPlaying: true,
    title: data.item.name,
    artist: data.item.artists.map((artist: any) => artist.name).join(', '),
    album: data.item.album.name,
    albumImageUrl: data.item.album.images[0]?.url,
  };
}
