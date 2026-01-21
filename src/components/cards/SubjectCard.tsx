import { Star, Youtube, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Subject } from "@/data/subjects";

interface SubjectCardProps {
  subject: Subject;
}

export const SubjectCard = ({ subject }: SubjectCardProps) => {
  const getLevelStyle = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-chart-2/20 text-chart-2 border-chart-2/30';
      case 'Intermediate':
        return 'bg-chart-3/20 text-chart-3 border-chart-3/30';
      default:
        return 'bg-chart-1/20 text-chart-1 border-chart-1/30';
    }
  };

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 bg-card border-border/50 overflow-hidden group">
      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-primary to-chart-3" />
      
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-5">
          <div className="p-3 rounded-xl bg-primary/10 shrink-0">
            <BookOpen className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
            {subject.title}
          </h3>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          <Badge variant="secondary" className="text-sm font-medium px-3 py-1">
            {subject.category}
          </Badge>
          <Badge 
            variant="outline" 
            className={`text-sm font-medium px-3 py-1 ${getLevelStyle(subject.level)}`}
          >
            {subject.level}
          </Badge>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-5 text-muted-foreground">
          <Star className="w-5 h-5 fill-chart-4 text-chart-4" />
          <span className="text-base font-semibold text-foreground">{subject.rating}</span>
          <span className="text-sm">rating</span>
        </div>

        {/* CTA Button */}
        <a
          href={subject.youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 px-5 bg-primary text-primary-foreground rounded-xl font-medium text-base hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
        >
          <Youtube className="w-5 h-5" />
          Watch Playlist
        </a>
      </CardContent>
    </Card>
  );
};