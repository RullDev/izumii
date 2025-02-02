import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { SiGithub, SiSpotify, SiInstagram, SiWhatsapp } from "react-icons/si";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <Card className="bg-card/50 backdrop-blur">
      <CardContent className="p-6">
        <div className="flex flex-col items-center gap-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=natsumi" alt="Natsumi" />
            <AvatarFallback>NA</AvatarFallback>
          </Avatar>

          <div className="text-center">
            <h1 className="text-2xl font-bold">Natsumi つゐ</h1>
            <p className="text-sm text-muted-foreground mt-1">
              あなたがいてくれて、私はここにいる。
            </p>
          </div>

          <div className="flex gap-2">
            <Badge variant="secondary" className="bg-zinc-800/50">
              <SiSpotify className="h-4 w-4 mr-1" /> Npoding
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800/50">
              ✨ Tune
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800/50">
              🎮 Anime
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800/50">
              🎵 Music
            </Badge>
          </div>

          <div className="flex gap-3">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <SiGithub className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <SiInstagram className="h-5 w-5" />
            </a>
            <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <SiSpotify className="h-5 w-5" />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <SiWhatsapp className="h-5 w-5" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}