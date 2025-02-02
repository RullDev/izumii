import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { SiSpotify } from "react-icons/si";

export function SpotifyCard() {
  const { data: song, isLoading } = useQuery({
    queryKey: ["/api/spotify/now-playing"],
  });

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[150px]" />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!song?.isPlaying) {
    return (
      <Card className="bg-zinc-900/50">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 text-zinc-400">
            <SiSpotify className="h-5 w-5" />
            <p className="text-sm">No listening to anything</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-zinc-900/50">
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <img
            src={song.albumImageUrl}
            alt={song.album}
            className="h-12 w-12 rounded"
          />
          <div>
            <p className="font-medium">{song.title}</p>
            <p className="text-sm text-zinc-400">{song.artist}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}