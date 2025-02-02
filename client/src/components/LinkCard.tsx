import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface LinkCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export function LinkCard({ title, description, icon, href }: LinkCardProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Card className="bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-xl">{icon}</div>
              <div>
                <h3 className="font-medium text-sm">{title}</h3>
                <p className="text-xs text-zinc-400">{description}</p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-zinc-400" />
          </div>
        </CardContent>
      </Card>
    </a>
  );
}