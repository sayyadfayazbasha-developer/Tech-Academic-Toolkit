import { Youtube, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { YouTubeChannel } from "@/data/resources";

interface YouTubeCardProps {
  channel: YouTubeChannel;
}

export const YouTubeCard = ({ channel }: YouTubeCardProps) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-xl hover:border-destructive/50 hover:-translate-y-1 bg-card border-border/50 overflow-hidden group">
      {/* Top accent bar - YouTube red gradient */}
      <div className="h-1.5 bg-gradient-to-r from-destructive to-destructive/70" />
      
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 rounded-xl bg-destructive/10 shrink-0">
            <Play className="w-6 h-6 text-destructive" />
          </div>
          <h3 className="font-semibold text-lg text-foreground group-hover:text-destructive transition-colors line-clamp-2 leading-tight">
            {channel.name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-base mb-5 line-clamp-3">
          {channel.description}
        </p>

        {/* Subscribers Badge */}
        <div className="flex items-center gap-2 mb-5">
          <Badge variant="secondary" className="text-sm px-3 py-1">
            <Youtube className="w-4 h-4 mr-1.5 text-destructive" />
            {channel.subscribers} Subscribers
          </Badge>
        </div>

        {/* CTA Button */}
        <a
          href={channel.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 px-5 bg-destructive text-destructive-foreground rounded-xl font-medium text-base hover:bg-destructive/90 transition-all shadow-md hover:shadow-lg"
        >
          <Youtube className="w-5 h-5" />
          Watch Channel
        </a>
      </CardContent>
    </Card>
  );
};