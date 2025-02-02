import type { Express } from "express";
import { createServer, type Server } from "http";
import { getNowPlaying } from "@/lib/spotify";

export function registerRoutes(app: Express): Server {
  const httpServer = createServer(app);

  // Get currently playing song from Spotify
  app.get("/api/spotify/now-playing", async (req, res) => {
    try {
      // In a real implementation, we would get the access token from
      // environment variables or a secure token store
      const mockData = {
        isPlaying: true,
        title: "Sparkle",
        artist: "RADWIMPS",
        album: "Your Name",
        albumImageUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=sparkle"
      };
      
      res.json(mockData);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch Spotify data" });
    }
  });

  return httpServer;
}
