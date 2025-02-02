import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

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
      <Card>
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">
            No listening to anything
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <img
            src={song.albumImageUrl}
            alt={song.album}
            className="h-12 w-12 rounded"
          />
          <div>
            <p className="font-medium">{song.title}</p>
            <p className="text-sm text-muted-foreground">{song.artist}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
