import { SubjectCard } from "@/components/cards/SubjectCard";
import { PlatformCard } from "@/components/cards/PlatformCard";
import { YouTubeCard } from "@/components/cards/YouTubeCard";
import { LinkCard } from "@/components/cards/LinkCard";
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
}

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center py-16 text-center">
    <div className="p-4 rounded-full bg-muted/50 mb-4">
      <Inbox className="w-8 h-8 text-muted-foreground" />
    </div>
    <p className="text-lg font-medium text-foreground mb-1">No results found</p>
    <p className="text-sm text-muted-foreground">Try adjusting your search terms</p>
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
}: TabContentProps) => {
  const renderLinkCards = (items: LinkResource[]) => {
    if (items.length === 0) return <EmptyState />;
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <LinkCard key={index} resource={item} />
        ))}
      </div>
    );
  };

  switch (activeTab) {
    case "Subjects":
      if (filteredSubjects.length === 0) return <EmptyState />;
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredSubjects.map((subject, index) => (
            <SubjectCard key={index} subject={subject} />
          ))}
        </div>
      );
    case "Coding Platforms":
      if (filteredPlatforms.length === 0) return <EmptyState />;
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPlatforms.map((platform, index) => (
            <PlatformCard key={index} platform={platform} />
          ))}
        </div>
      );
    case "YouTube Channels":
      if (filteredChannels.length === 0) return <EmptyState />;
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredChannels.map((channel, index) => (
            <YouTubeCard key={index} channel={channel} />
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