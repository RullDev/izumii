import { Card, CardContent } from "@/components/ui/card";

interface LinkCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export function LinkCard({ title, description, icon, href }: LinkCardProps) {
  return (
    <a href={href}>
      <Card className="transition-colors hover:bg-accent">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <span className="text-2xl">{icon}</span>
            <div>
              <h3 className="font-medium">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
