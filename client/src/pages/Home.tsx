import { Header } from "@/components/Header";
import { SpotifyCard } from "@/components/SpotifyCard";
import { LinkCard } from "@/components/LinkCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Banner Background */}
      <div className="fixed inset-0 z-0">
        <AspectRatio ratio={16 / 9} className="w-full absolute top-0">
          <div 
            className="absolute inset-0"
            style={{
              background: `url('https://api.dicebear.com/7.x/shapes/svg?seed=banner&backgroundColor=0f0f0f') center/cover no-repeat`,
              filter: 'blur(90px) opacity(0.4)',
              transform: 'scale(1.1)',
            }}
          />
        </AspectRatio>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </div>

      {/* Content */}
      <ScrollArea className="relative z-10 h-screen">
        <div className="container max-w-2xl mx-auto px-4 py-12">
          <Header />

          <div className="mt-8 space-y-3">
            <LinkCard
              title="Personal Website"
              description="About me."
              icon="🌐"
              href="#"
            />
            <LinkCard 
              title="Character.ai RestAPI"
              description="Documentation for Character.ai API."
              icon="🔥"
              href="#"
            />
            <LinkCard
              title="WhatsApp Bot"
              description="Personal bot WhatsApp."
              icon="💬" 
              href="#"
            />
            <LinkCard
              title="WhatsApp Channel"
              description="Channel about Natsumi Bot."
              icon="✨"
              href="#"
            />
          </div>

          <div className="mt-6">
            <SpotifyCard />
          </div>

          <footer className="mt-12 pb-8 text-center text-sm text-zinc-500">
            See what I'm currently listening on Spotify
          </footer>
        </div>
      </ScrollArea>
    </div>
  );
}