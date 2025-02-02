import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { SiGithub, SiSpotify, SiInstagram, SiWhatsapp } from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { CheckIcon } from "lucide-react";

export function Header() {
  return (
    <Card className="bg-zinc-900/40 backdrop-blur border-zinc-800">
      <CardContent className="p-8">
        <div className="flex flex-col items-center gap-6">
          <Avatar className="h-24 w-24 ring-2 ring-zinc-800 ring-offset-2 ring-offset-zinc-950">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=rlzyy&backgroundColor=b6e3f4" alt="Rlzyy" />
            <AvatarFallback>RL</AvatarFallback>
          </Avatar>

          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-zinc-100">
              Rlzyy つゐ{" "}
              <span className="inline-flex items-center justify-center">
                <CheckIcon className="h-5 w-5 text-blue-400" strokeWidth={3} />
              </span>
            </h1>
            <p className="text-sm text-zinc-400">
              あなたがいてくれて、私はここにいる。
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700/50 transition-colors">
              <SiSpotify className="h-3.5 w-3.5 mr-1.5" /> Ngoding
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700/50 transition-colors">
              ✨ Tune
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700/50 transition-colors">
              🎮 Anime
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700/50 transition-colors">
              🎵 Music
            </Badge>
          </div>

          <div className="flex gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-100 transition-colors">
              <SiInstagram className="h-5 w-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-100 transition-colors">
              <SiGithub className="h-5 w-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-100 transition-colors">
              <SiSpotify className="h-5 w-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-100 transition-colors">
              <SiWhatsapp className="h-5 w-5" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}