import { Star, Youtube, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Subject } from "@/data/subjects";
import { HighlightText } from "@/components/HighlightText";

interface SubjectCardProps {
  subject: Subject;
  searchTerm?: string;
}

export const SubjectCard = ({ subject, searchTerm = "" }: SubjectCardProps) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 bg-card border-border/50 overflow-hidden group">
      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-primary to-chart-3" />
      
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 rounded-xl bg-primary/10 shrink-0">
            <BookOpen className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
            <HighlightText text={subject.title} searchTerm={searchTerm} />
          </h3>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          <Badge variant="secondary" className="text-sm font-medium px-3 py-1">
            <HighlightText text={subject.category} searchTerm={searchTerm} />
          </Badge>
          <Badge variant="secondary" className="text-sm font-medium px-3 py-1">
            <HighlightText text={subject.level} searchTerm={searchTerm} />
          </Badge>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-5">
          <Badge variant="secondary" className="text-sm px-3 py-1">
            <Star className="w-4 h-4 mr-1.5 fill-primary text-primary" />
            {subject.rating} rating
          </Badge>
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
