import { Header } from "@/components/Header";
import { SpotifyCard } from "@/components/SpotifyCard";
import { LinkCard } from "@/components/LinkCard";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollArea className="h-screen">
        <div className="container mx-auto px-4 py-8">
          <Header />
          
          <div className="mt-8 grid gap-4">
            <SpotifyCard />
            
            <div className="grid gap-4 sm:grid-cols-2">
              <LinkCard
                title="Personal Website"
                description="My personal website built with Next.js"
                icon="🌐"
                href="#"
              />
              <LinkCard 
                title="Character at RestAPI"
                description="Personal character data accessible via REST API"
                icon="👤"
                href="#"
              />
              <LinkCard
                title="WhatsApp Bot"
                description="WhatsApp automation bot"
                icon="💬" 
                href="#"
              />
              <LinkCard
                title="WhatsApp Channel"
                description="My WhatsApp channel for updates"
                icon="📢"
                href="#"
              />
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
