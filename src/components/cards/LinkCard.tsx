import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { LinkResource } from "@/data/resources";

interface LinkCardProps {
  resource: LinkResource;
}

export const LinkCard = ({ resource }: LinkCardProps) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 bg-card border-border/50 overflow-hidden group">
      <CardContent className="p-6">
        {/* Header with icon */}
        <div className="flex items-start gap-4 mb-5">
          <div className="p-3 rounded-xl bg-primary/10 shrink-0">
            <ExternalLink className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
            {resource.title}
          </h3>
        </div>

        {/* CTA Button */}
        <a
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 px-5 bg-primary text-primary-foreground rounded-xl font-medium text-base hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
        >
          <ExternalLink className="w-5 h-5" />
          {resource.buttonText}
        </a>
      </CardContent>
    </Card>
  );
};