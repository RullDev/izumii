import { Header } from "@/components/Header";
import { SpotifyCard } from "@/components/SpotifyCard";
import { LinkCard } from "@/components/LinkCard";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div 
        className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-zinc-800/50 to-transparent"
        style={{
          backgroundImage: "url('https://api.dicebear.com/7.x/identicon/svg?seed=banner')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
          opacity: 0.5,
        }}
      />

      <ScrollArea className="h-screen relative">
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

          <footer className="mt-8 pb-8 text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} Natsumi. All rights reserved.
          </footer>
        </div>
      </ScrollArea>
    </div>
  );
}