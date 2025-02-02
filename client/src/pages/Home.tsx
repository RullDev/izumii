import { Header } from "@/components/Header";
import { SpotifyCard } from "@/components/SpotifyCard";
import { LinkCard } from "@/components/LinkCard";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ScrollArea className="h-screen">
        <div className="container max-w-2xl mx-auto px-4 py-8">
          <Header />

          <div className="mt-6 space-y-4">
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
        </div>
      </ScrollArea>
    </div>
  );
}