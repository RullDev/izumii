import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { SiInstagram, SiGithub, SiWhatsapp } from "react-icons/si";

export function Header() {
  return (
    <Card className="bg-card/50 backdrop-blur">
      <CardContent className="p-6">
        <div className="flex flex-col items-center gap-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=natsumi" />
            <AvatarFallback>NA</AvatarFallback>
          </Avatar>
          
          <div className="text-center">
            <h1 className="text-2xl font-bold">Natsumi つき ☾</h1>
            <p className="text-sm text-muted-foreground">
              あなたがいてくれて、私はここにいる。
            </p>
          </div>

          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary">
              <SiInstagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <SiGithub className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <SiWhatsapp className="h-5 w-5" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
