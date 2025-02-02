import type { Express } from "express";
import { createServer, type Server } from "http";
import { Buffer } from 'buffer';

const SPOTIFY_TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

async function getSpotifyAccessToken() {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!client_id || !client_secret) {
    throw new Error('Missing Spotify credentials');
  }

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

  const response = await fetch(SPOTIFY_TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials'
  });

  if (!response.ok) {
    throw new Error('Failed to get access token');
  }

  return response.json();
}

export function registerRoutes(app: Express): Server {
  const httpServer = createServer(app);

  // Get Spotify access token
  app.get("/api/spotify/token", async (_req, res) => {
    try {
      const token = await getSpotifyAccessToken();
      res.json(token);
    } catch (error) {
      res.status(500).json({ error: "Failed to get Spotify access token" });
    }
  });

  // Get currently playing song from Spotify
  app.get("/api/spotify/now-playing", async (_req, res) => {
    try {
      const token = await getSpotifyAccessToken();
      const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
          Authorization: `Bearer ${token.access_token}`,
        },
      });

      if (response.status === 204) {
        return res.json({ isPlaying: false });
      }

      const data = await response.json();
      res.json({
        isPlaying: data.is_playing,
        title: data.item?.name,
        artist: data.item?.artists.map((artist: any) => artist.name).join(', '),
        album: data.item?.album.name,
        albumImageUrl: data.item?.album.images[0]?.url,
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch Spotify data" });
    }
  });

  return httpServer;
}