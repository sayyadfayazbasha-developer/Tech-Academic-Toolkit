import { useMemo } from "react";
import { Search, BookOpen, Code2, Youtube, Target, Briefcase, Lightbulb, Video, Library, Users, TrendingUp, Map, GraduationCap, FileText } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface SearchSuggestionsProps {
  searchTerm: string;
  onSelectCategory: (category: string) => void;
  onSelectItem: (category: string) => void;
  onClose: () => void;
  filteredCounts: Record<string, number>;
  items: {
    subjects: Array<{ title: string }>;
    platforms: Array<{ name: string }>;
    channels: Array<{ name: string }>;
    challenges: Array<{ title: string }>;
    interviewPrep: Array<{ title: string }>;
    projectIdeas: Array<{ title: string }>;
    liveSessions: Array<{ title: string }>;
    resourceLibrary: Array<{ title: string }>;
    communityForum: Array<{ title: string }>;
    placementTracker: Array<{ title: string }>;
    careerPathGuides: Array<{ title: string }>;
    jntua: Array<{ title: string }>;
    pdfsMaterials: Array<{ title: string }>;
  };
}

const CATEGORY_CONFIG = [
  { key: "Subjects", icon: BookOpen, dataKey: "subjects" as const },
  { key: "Coding Platforms", icon: Code2, dataKey: "platforms" as const },
  { key: "YouTube Channels", icon: Youtube, dataKey: "channels" as const },
  { key: "Practice Challenges", icon: Target, dataKey: "challenges" as const },
  { key: "Interview Prep", icon: Briefcase, dataKey: "interviewPrep" as const },
  { key: "Project Ideas", icon: Lightbulb, dataKey: "projectIdeas" as const },
  { key: "Live Sessions", icon: Video, dataKey: "liveSessions" as const },
  { key: "Resource Library", icon: Library, dataKey: "resourceLibrary" as const },
  { key: "Community Forum", icon: Users, dataKey: "communityForum" as const },
  { key: "Placement Tracker", icon: TrendingUp, dataKey: "placementTracker" as const },
  { key: "Career Path Guides", icon: Map, dataKey: "careerPathGuides" as const },
  { key: "JNTUA", icon: GraduationCap, dataKey: "jntua" as const },
  { key: "PDFS & MATERIALS", icon: FileText, dataKey: "pdfsMaterials" as const },
];

export const SearchSuggestions = ({
  searchTerm,
  onSelectCategory,
  onSelectItem,
  onClose,
  filteredCounts,
  items
}: SearchSuggestionsProps) => {
  const searchLower = searchTerm.toLowerCase().trim();

  // Get matching categories
  const matchingCategories = useMemo(() => {
    return CATEGORY_CONFIG.filter(cat => 
      cat.key.toLowerCase().includes(searchLower) && filteredCounts[cat.key] > 0
    ).slice(0, 4);
  }, [searchLower, filteredCounts]);

  // Get matching items from all categories
  const matchingItems = useMemo(() => {
    const results: Array<{ title: string; category: string; icon: typeof BookOpen }> = [];
    
    CATEGORY_CONFIG.forEach(cat => {
      const data = items[cat.dataKey];
      if (!data) return;
      
      data.slice(0, 3).forEach(item => {
        const title = 'title' in item ? item.title : ('name' in item ? item.name : '');
        if (title.toLowerCase().includes(searchLower)) {
          results.push({ title, category: cat.key, icon: cat.icon });
        }
      });
    });
    
    return results.slice(0, 6);
  }, [searchLower, items]);

  if (!searchTerm.trim() || (matchingCategories.length === 0 && matchingItems.length === 0)) {
    return null;
  }

  const highlightMatch = (text: string) => {
    const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-chart-4/40 text-foreground rounded px-0.5">
          {part}
        </mark>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-xl z-50 overflow-hidden animate-fade-in">
      <ScrollArea className="max-h-80">
        <div className="p-2">
          {/* Category suggestions */}
          {matchingCategories.length > 0 && (
            <div className="mb-2">
              <p className="text-xs text-muted-foreground px-3 py-1.5 uppercase font-medium">Categories</p>
              {matchingCategories.map(cat => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.key}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted/50 transition-colors text-left group"
                    onClick={() => {
                      onSelectCategory(cat.key);
                      onClose();
                    }}
                  >
                    <div className="p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="flex-1 text-sm font-medium text-foreground">
                      {highlightMatch(cat.key)}
                    </span>
                    <Badge variant="secondary" className="text-xs">
                      {filteredCounts[cat.key]}
                    </Badge>
                  </button>
                );
              })}
            </div>
          )}

          {/* Item suggestions */}
          {matchingItems.length > 0 && (
            <div>
              <p className="text-xs text-muted-foreground px-3 py-1.5 uppercase font-medium">Results</p>
              {matchingItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={`${item.category}-${idx}`}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted/50 transition-colors text-left group"
                    onClick={() => {
                      onSelectItem(item.category);
                      onClose();
                    }}
                  >
                    <div className="p-1.5 rounded-lg bg-muted group-hover:bg-muted/80 transition-colors">
                      <Search className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {highlightMatch(item.title)}
                      </p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Icon className="w-3 h-3" />
                        {item.category}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};
