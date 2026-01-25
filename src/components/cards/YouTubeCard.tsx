import { Youtube, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { YouTubeChannel } from "@/data/resources";
import { HighlightText } from "@/components/HighlightText";

interface YouTubeCardProps {
  channel: YouTubeChannel;
  searchTerm?: string;
}

export const YouTubeCard = ({ channel, searchTerm = "" }: YouTubeCardProps) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 bg-card border-border/50 overflow-hidden group">
      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-primary to-chart-3" />
      
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 rounded-xl bg-primary/10 shrink-0">
            <Play className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
            <HighlightText text={channel.name} searchTerm={searchTerm} />
          </h3>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-base mb-5 line-clamp-3">
          <HighlightText text={channel.description} searchTerm={searchTerm} />
        </p>

        {/* Subscribers Badge */}
        <div className="flex items-center gap-2 mb-5">
          <Badge variant="secondary" className="text-sm px-3 py-1">
            <Youtube className="w-4 h-4 mr-1.5 text-primary" />
            {channel.subscribers} Subscribers
          </Badge>
        </div>

        {/* CTA Button */}
        <a
          href={channel.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 px-5 bg-primary text-primary-foreground rounded-xl font-medium text-base hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
        >
          <Youtube className="w-5 h-5" />
          Watch Channel
        </a>
      </CardContent>
    </Card>
  );
};
