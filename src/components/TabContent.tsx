import { SubjectCard } from "@/components/cards/SubjectCard";
import { PlatformCard } from "@/components/cards/PlatformCard";
import { YouTubeCard } from "@/components/cards/YouTubeCard";
import { LinkCard } from "@/components/cards/LinkCard";
import { AnimatedCard } from "@/components/AnimatedCard";
import { CategoryChips } from "@/components/CategoryChips";
import { Subject } from "@/data/subjects";
import { 
  CodingPlatform, 
  YouTubeChannel, 
  LinkResource 
} from "@/data/resources";
import { Inbox } from "lucide-react";

interface TabContentProps {
  activeTab: string;
  filteredSubjects: Subject[];
  filteredPlatforms: CodingPlatform[];
  filteredChannels: YouTubeChannel[];
  filteredChallenges: LinkResource[];
  filteredInterviewPrep: LinkResource[];
  filteredProjectIdeas: LinkResource[];
  filteredLiveSessions: LinkResource[];
  filteredResourceLibrary: LinkResource[];
  filteredCommunityForum: LinkResource[];
  filteredPlacementTracker: LinkResource[];
  filteredCareerPathGuides: LinkResource[];
  filteredJntua: LinkResource[];
  filteredPdfsMaterials: LinkResource[];
  selectedCategory?: string | null;
  onSelectCategory?: (category: string | null) => void;
  searchTerm?: string;
}

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center py-16 text-center">
    <div className="p-4 rounded-full bg-muted/50 mb-4">
      <Inbox className="w-8 h-8 text-muted-foreground" />
    </div>
    <p className="text-lg font-medium text-foreground mb-1">No results found</p>
    <p className="text-sm text-muted-foreground">Try adjusting your search terms or filter</p>
  </div>
);

export const TabContent = ({
  activeTab,
  filteredSubjects,
  filteredPlatforms,
  filteredChannels,
  filteredChallenges,
  filteredInterviewPrep,
  filteredProjectIdeas,
  filteredLiveSessions,
  filteredResourceLibrary,
  filteredCommunityForum,
  filteredPlacementTracker,
  filteredCareerPathGuides,
  filteredJntua,
  filteredPdfsMaterials,
  selectedCategory,
  onSelectCategory,
  searchTerm = "",
}: TabContentProps) => {
  const renderLinkCards = (items: LinkResource[]) => {
    if (items.length === 0) return <EmptyState />;
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <AnimatedCard key={index} delay={index * 50}>
            <LinkCard resource={item} searchTerm={searchTerm} />
          </AnimatedCard>
        ))}
      </div>
    );
  };

  // Filter subjects by category
  const displayedSubjects = selectedCategory
    ? filteredSubjects.filter((s) => s.category === selectedCategory)
    : filteredSubjects;

  switch (activeTab) {
    case "Subjects":
      const subjectCategories = filteredSubjects.map((s) => s.category);
      return (
        <div className="space-y-4">
          {onSelectCategory && (
            <CategoryChips
              categories={subjectCategories}
              selectedCategory={selectedCategory ?? null}
              onSelectCategory={onSelectCategory}
            />
          )}
          {displayedSubjects.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {displayedSubjects.map((subject, index) => (
                <AnimatedCard key={index} delay={index * 50}>
                  <SubjectCard subject={subject} searchTerm={searchTerm} />
                </AnimatedCard>
              ))}
            </div>
          )}
        </div>
      );
    case "Coding Platforms":
      if (filteredPlatforms.length === 0) return <EmptyState />;
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPlatforms.map((platform, index) => (
            <AnimatedCard key={index} delay={index * 50}>
              <PlatformCard platform={platform} searchTerm={searchTerm} />
            </AnimatedCard>
          ))}
        </div>
      );
    case "YouTube Channels":
      if (filteredChannels.length === 0) return <EmptyState />;
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredChannels.map((channel, index) => (
            <AnimatedCard key={index} delay={index * 50}>
              <YouTubeCard channel={channel} searchTerm={searchTerm} />
            </AnimatedCard>
          ))}
        </div>
      );
    case "Practice Challenges":
      return renderLinkCards(filteredChallenges);
    case "Interview Prep":
      return renderLinkCards(filteredInterviewPrep);
    case "Project Ideas":
      return renderLinkCards(filteredProjectIdeas);
    case "Live Sessions":
      return renderLinkCards(filteredLiveSessions);
    case "Resource Library":
      return renderLinkCards(filteredResourceLibrary);
    case "Community Forum":
      return renderLinkCards(filteredCommunityForum);
    case "Placement Tracker":
      return renderLinkCards(filteredPlacementTracker);
    case "Career Path Guides":
      return renderLinkCards(filteredCareerPathGuides);
    case "JNTUA":
      return renderLinkCards(filteredJntua);
    case "PDFS & MATERIALS":
      return renderLinkCards(filteredPdfsMaterials);
    default:
      return null;
  }
};