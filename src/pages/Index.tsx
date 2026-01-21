import { useState, useMemo } from "react";
import { Search, ChevronRight, PanelLeftClose, PanelLeft, BookOpen, Code2, Youtube, Target, Briefcase, Lightbulb, Video, Library, Users, TrendingUp, Map, GraduationCap, FileText, Star, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileMenu } from "@/components/MobileMenu";
import { TabContent } from "@/components/TabContent";
import { subjects } from "@/data/subjects";
import {
  codingPlatforms,
  youtubeChannels,
  practiceChallenges,
  interviewPrep,
  projectIdeas,
  liveSessions,
  resourceLibrary,
  communityForum,
  placementTracker,
  careerPathGuides,
  jntuaData,
  pdfsMaterials,
  suggestedSections,
} from "@/data/resources";

const TABS = [
  { name: "Subjects", icon: BookOpen },
  { name: "Coding Platforms", icon: Code2 },
  { name: "YouTube Channels", icon: Youtube },
  { name: "Practice Challenges", icon: Target },
  { name: "Interview Prep", icon: Briefcase },
  { name: "Project Ideas", icon: Lightbulb },
  { name: "Live Sessions", icon: Video },
  { name: "Resource Library", icon: Library },
  { name: "Community Forum", icon: Users },
  { name: "Placement Tracker", icon: TrendingUp },
  { name: "Career Path Guides", icon: Map },
  { name: "JNTUA", icon: GraduationCap },
  { name: "PDFS & MATERIALS", icon: FileText },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("Subjects");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const tabCounts = useMemo(() => ({
    "Subjects": subjects.length,
    "Coding Platforms": codingPlatforms.length,
    "YouTube Channels": youtubeChannels.length,
    "Practice Challenges": practiceChallenges.length,
    "Interview Prep": interviewPrep.length,
    "Project Ideas": projectIdeas.length,
    "Live Sessions": liveSessions.length,
    "Resource Library": resourceLibrary.length,
    "Community Forum": communityForum.length,
    "Placement Tracker": placementTracker.length,
    "Career Path Guides": careerPathGuides.length,
    "JNTUA": jntuaData.length,
    "PDFS & MATERIALS": pdfsMaterials.length,
  }), []);

  const filteredSubjects = useMemo(() => 
    subjects.filter(s =>
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.category.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]);

  const filteredPlatforms = useMemo(() =>
    codingPlatforms.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]);

  const filteredChannels = useMemo(() =>
    youtubeChannels.filter(c =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.description.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]);

  const filteredChallenges = useMemo(() =>
    practiceChallenges.filter(i =>
      i.title.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]);

  const filteredInterviewPrep = useMemo(() =>
    interviewPrep.filter(i =>
      i.title.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]);

  const filteredProjectIdeas = useMemo(() =>
    projectIdeas.filter(i =>
      i.title.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]);

  const filteredLiveSessions = useMemo(() =>
    liveSessions.filter(i =>
      i.title.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]);

  const filteredResourceLibrary = useMemo(() =>
    resourceLibrary.filter(i =>
      i.title.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]);

  const filteredCommunityForum = useMemo(() =>
    communityForum.filter(i =>
      i.title.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]);

  const filteredPlacementTracker = useMemo(() =>
    placementTracker.filter(i =>
      i.title.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]);

  const filteredCareerPathGuides = useMemo(() =>
    careerPathGuides.filter(i =>
      i.title.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]);

  const filteredJntua = useMemo(() =>
    jntuaData.filter(i =>
      i.title.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]);

  const filteredPdfsMaterials = useMemo(() =>
    pdfsMaterials.filter(i =>
      i.title.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]);

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <Header onMenuClick={() => setIsMobileMenuOpen(true)} />
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        tabs={TABS.map(t => t.name)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabCounts={tabCounts}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Search Bar Card */}
        <Card className="mb-6 shadow-lg border-border/50">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search subjects, platforms, or resources..."
                className="pl-12 h-12 text-base bg-background border-border/50 focus:border-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Navigation Panel - Fixed Categories */}
          <Card className={`shrink-0 shadow-lg border-border/50 hidden lg:block transition-all duration-300 ease-in-out sticky top-32 self-start ${
            isSidebarCollapsed ? "w-[72px]" : "w-72 xl:w-80"
          }`}>
            <CardHeader className="pb-3 border-b border-border/50">
              <div className="flex items-center justify-between">
                {!isSidebarCollapsed && (
                  <CardTitle className="text-lg font-semibold text-foreground">Categories</CardTitle>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-8 w-8 shrink-0 ${isSidebarCollapsed ? "mx-auto" : ""}`}
                  onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                  aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                  {isSidebarCollapsed ? (
                    <PanelLeft className="w-4 h-4" />
                  ) : (
                    <PanelLeftClose className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="max-h-[calc(100vh-200px)]">
                <div className={`space-y-1 ${isSidebarCollapsed ? "p-2" : "p-3"}`}>
                  {TABS.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.name;
                    
                    if (isSidebarCollapsed) {
                      return (
                        <Tooltip key={tab.name} delayDuration={0}>
                          <TooltipTrigger asChild>
                            <button
                              className={`w-full flex items-center justify-center p-3 rounded-lg transition-all duration-200 ${
                                isActive
                                  ? "bg-primary text-primary-foreground shadow-md"
                                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                              }`}
                              onClick={() => setActiveTab(tab.name)}
                            >
                              <Icon className="w-5 h-5" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="right" className="flex items-center gap-2">
                            <span>{tab.name}</span>
                            <Badge variant="secondary" className="text-xs">
                              {tabCounts[tab.name] || 0}
                            </Badge>
                          </TooltipContent>
                        </Tooltip>
                      );
                    }

                    return (
                      <button
                        key={tab.name}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
                          isActive
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                        onClick={() => setActiveTab(tab.name)}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        <span className="flex-1 text-left truncate">{tab.name}</span>
                        <Badge 
                          variant={isActive ? "secondary" : "outline"} 
                          className={`shrink-0 min-w-[28px] justify-center text-xs tabular-nums ${
                            isActive 
                              ? "bg-primary-foreground/20 text-primary-foreground border-transparent" 
                              : "border-border/50"
                          }`}
                        >
                          {tabCounts[tab.name] || 0}
                        </Badge>
                        <ChevronRight className={`w-4 h-4 shrink-0 transition-all duration-200 ${
                          isActive 
                            ? "opacity-100" 
                            : "opacity-0 group-hover:opacity-100"
                        }`} />
                      </button>
                    );
                  })}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {/* Important Links Section - Center */}
            <Card className="mb-6 shadow-lg border-border/50">
              <CardHeader className="pb-3 border-b border-border/50">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Star className="w-5 h-5 text-primary" />
                  Important Links
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {suggestedSections.map((section, index) => (
                    <a
                      key={index}
                      href={section.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-lg border border-border/30 bg-card hover:bg-muted/50 hover:border-primary/30 transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Star className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                          {section.title}
                        </span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0 transition-colors ml-2" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Category Content Card */}
            <Card className="shadow-lg border-border/50">
              <CardHeader className="border-b border-border/50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-foreground">{activeTab}</CardTitle>
                  <Badge variant="secondary" className="text-sm px-3 py-1">
                    {tabCounts[activeTab] || 0} items
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <TabContent
                  activeTab={activeTab}
                  filteredSubjects={filteredSubjects}
                  filteredPlatforms={filteredPlatforms}
                  filteredChannels={filteredChannels}
                  filteredChallenges={filteredChallenges}
                  filteredInterviewPrep={filteredInterviewPrep}
                  filteredProjectIdeas={filteredProjectIdeas}
                  filteredLiveSessions={filteredLiveSessions}
                  filteredResourceLibrary={filteredResourceLibrary}
                  filteredCommunityForum={filteredCommunityForum}
                  filteredPlacementTracker={filteredPlacementTracker}
                  filteredCareerPathGuides={filteredCareerPathGuides}
                  filteredJntua={filteredJntua}
                  filteredPdfsMaterials={filteredPdfsMaterials}
                />
              </CardContent>
            </Card>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Index;