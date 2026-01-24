import { useState, useMemo, useEffect, useRef } from "react";
import { Search, ChevronRight, PanelLeftClose, PanelLeft, BookOpen, Code2, Youtube, Target, Briefcase, Lightbulb, Video, Library, Users, TrendingUp, Map, GraduationCap, FileText, Star, ExternalLink, Clock } from "lucide-react";
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
import { ScrollToTop } from "@/components/ScrollToTop";
import { StatsSection } from "@/components/StatsSection";
import { AnimatedCard } from "@/components/AnimatedCard";
import { SearchSuggestions } from "@/components/SearchSuggestions";
import { useRecentlyViewed } from "@/hooks/useRecentlyViewed";
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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const { recentlyViewed, addToRecentlyViewed } = useRecentlyViewed();

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Track recently viewed categories
  useEffect(() => {
    addToRecentlyViewed(activeTab);
  }, [activeTab, addToRecentlyViewed]);

  // Reset category filter when changing tabs
  useEffect(() => {
    setSelectedCategory(null);
  }, [activeTab]);

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

  const searchLower = searchTerm.toLowerCase().trim();

  // Helper to check if category name matches search
  const categoryMatches = (categoryName: string) => 
    searchLower && categoryName.toLowerCase().includes(searchLower);

  const filteredSubjects = useMemo(() => 
    categoryMatches("Subjects") ? subjects : subjects.filter(s =>
      s.title.toLowerCase().includes(searchLower) ||
      s.category.toLowerCase().includes(searchLower) ||
      s.level.toLowerCase().includes(searchLower)
    ), [searchLower]);

  const filteredPlatforms = useMemo(() =>
    categoryMatches("Coding Platforms") || categoryMatches("coding") || categoryMatches("platform") 
      ? codingPlatforms 
      : codingPlatforms.filter(p =>
          p.name.toLowerCase().includes(searchLower) ||
          p.description.toLowerCase().includes(searchLower)
        ), [searchLower]);

  const filteredChannels = useMemo(() =>
    categoryMatches("YouTube Channels") || categoryMatches("youtube") || categoryMatches("channel")
      ? youtubeChannels 
      : youtubeChannels.filter(c =>
          c.name.toLowerCase().includes(searchLower) ||
          c.description.toLowerCase().includes(searchLower)
        ), [searchLower]);

  const filteredChallenges = useMemo(() =>
    categoryMatches("Practice Challenges") || categoryMatches("practice") || categoryMatches("challenge")
      ? practiceChallenges 
      : practiceChallenges.filter(i =>
          i.title.toLowerCase().includes(searchLower) ||
          i.buttonText.toLowerCase().includes(searchLower)
        ), [searchLower]);

  const filteredInterviewPrep = useMemo(() =>
    categoryMatches("Interview Prep") || categoryMatches("interview")
      ? interviewPrep 
      : interviewPrep.filter(i =>
          i.title.toLowerCase().includes(searchLower) ||
          i.buttonText.toLowerCase().includes(searchLower)
        ), [searchLower]);

  const filteredProjectIdeas = useMemo(() =>
    categoryMatches("Project Ideas") || categoryMatches("project")
      ? projectIdeas 
      : projectIdeas.filter(i =>
          i.title.toLowerCase().includes(searchLower) ||
          i.buttonText.toLowerCase().includes(searchLower)
        ), [searchLower]);

  const filteredLiveSessions = useMemo(() =>
    categoryMatches("Live Sessions") || categoryMatches("live") || categoryMatches("session")
      ? liveSessions 
      : liveSessions.filter(i =>
          i.title.toLowerCase().includes(searchLower) ||
          i.buttonText.toLowerCase().includes(searchLower)
        ), [searchLower]);

  const filteredResourceLibrary = useMemo(() =>
    categoryMatches("Resource Library") || categoryMatches("library") || categoryMatches("resource")
      ? resourceLibrary 
      : resourceLibrary.filter(i =>
          i.title.toLowerCase().includes(searchLower) ||
          i.buttonText.toLowerCase().includes(searchLower)
        ), [searchLower]);

  const filteredCommunityForum = useMemo(() =>
    categoryMatches("Community Forum") || categoryMatches("community") || categoryMatches("forum")
      ? communityForum 
      : communityForum.filter(i =>
          i.title.toLowerCase().includes(searchLower) ||
          i.buttonText.toLowerCase().includes(searchLower)
        ), [searchLower]);

  const filteredPlacementTracker = useMemo(() =>
    categoryMatches("Placement Tracker") || categoryMatches("placement") || categoryMatches("tracker")
      ? placementTracker 
      : placementTracker.filter(i =>
          i.title.toLowerCase().includes(searchLower) ||
          i.buttonText.toLowerCase().includes(searchLower)
        ), [searchLower]);

  const filteredCareerPathGuides = useMemo(() =>
    categoryMatches("Career Path Guides") || categoryMatches("career") || categoryMatches("path") || categoryMatches("guide")
      ? careerPathGuides 
      : careerPathGuides.filter(i =>
          i.title.toLowerCase().includes(searchLower) ||
          i.buttonText.toLowerCase().includes(searchLower)
        ), [searchLower]);

  const filteredJntua = useMemo(() =>
    categoryMatches("JNTUA") || categoryMatches("jntu")
      ? jntuaData 
      : jntuaData.filter(i =>
          i.title.toLowerCase().includes(searchLower) ||
          i.buttonText.toLowerCase().includes(searchLower)
        ), [searchLower]);

  const filteredPdfsMaterials = useMemo(() =>
    categoryMatches("PDFS & MATERIALS") || categoryMatches("pdf") || categoryMatches("material")
      ? pdfsMaterials 
      : pdfsMaterials.filter(i =>
          i.title.toLowerCase().includes(searchLower) ||
          i.buttonText.toLowerCase().includes(searchLower)
        ), [searchLower]);

  // Auto-switch to tab with results when searching
  useEffect(() => {
    if (!searchLower) return;
    
    const currentTabHasResults = () => {
      switch (activeTab) {
        case "Subjects": return filteredSubjects.length > 0;
        case "Coding Platforms": return filteredPlatforms.length > 0;
        case "YouTube Channels": return filteredChannels.length > 0;
        case "Practice Challenges": return filteredChallenges.length > 0;
        case "Interview Prep": return filteredInterviewPrep.length > 0;
        case "Project Ideas": return filteredProjectIdeas.length > 0;
        case "Live Sessions": return filteredLiveSessions.length > 0;
        case "Resource Library": return filteredResourceLibrary.length > 0;
        case "Community Forum": return filteredCommunityForum.length > 0;
        case "Placement Tracker": return filteredPlacementTracker.length > 0;
        case "Career Path Guides": return filteredCareerPathGuides.length > 0;
        case "JNTUA": return filteredJntua.length > 0;
        case "PDFS & MATERIALS": return filteredPdfsMaterials.length > 0;
        default: return false;
      }
    };
    
    if (currentTabHasResults()) return;
    
    // Find first tab with results
    const tabsWithResults = [
      { name: "Subjects", count: filteredSubjects.length },
      { name: "Coding Platforms", count: filteredPlatforms.length },
      { name: "YouTube Channels", count: filteredChannels.length },
      { name: "Practice Challenges", count: filteredChallenges.length },
      { name: "Interview Prep", count: filteredInterviewPrep.length },
      { name: "Project Ideas", count: filteredProjectIdeas.length },
      { name: "Live Sessions", count: filteredLiveSessions.length },
      { name: "Resource Library", count: filteredResourceLibrary.length },
      { name: "Community Forum", count: filteredCommunityForum.length },
      { name: "Placement Tracker", count: filteredPlacementTracker.length },
      { name: "Career Path Guides", count: filteredCareerPathGuides.length },
      { name: "JNTUA", count: filteredJntua.length },
      { name: "PDFS & MATERIALS", count: filteredPdfsMaterials.length },
    ];
    
    const firstWithResults = tabsWithResults.find(t => t.count > 0);
    if (firstWithResults) {
      setActiveTab(firstWithResults.name);
    }
  }, [searchLower, filteredSubjects.length, filteredPlatforms.length, filteredChannels.length, 
      filteredChallenges.length, filteredInterviewPrep.length, filteredProjectIdeas.length,
      filteredLiveSessions.length, filteredResourceLibrary.length, filteredCommunityForum.length,
      filteredPlacementTracker.length, filteredCareerPathGuides.length, filteredJntua.length,
      filteredPdfsMaterials.length, activeTab]);

  // Dynamic tab counts based on search
  const filteredTabCounts = useMemo(() => ({
    "Subjects": filteredSubjects.length,
    "Coding Platforms": filteredPlatforms.length,
    "YouTube Channels": filteredChannels.length,
    "Practice Challenges": filteredChallenges.length,
    "Interview Prep": filteredInterviewPrep.length,
    "Project Ideas": filteredProjectIdeas.length,
    "Live Sessions": filteredLiveSessions.length,
    "Resource Library": filteredResourceLibrary.length,
    "Community Forum": filteredCommunityForum.length,
    "Placement Tracker": filteredPlacementTracker.length,
    "Career Path Guides": filteredCareerPathGuides.length,
    "JNTUA": filteredJntua.length,
    "PDFS & MATERIALS": filteredPdfsMaterials.length,
  }), [filteredSubjects, filteredPlatforms, filteredChannels, filteredChallenges,
       filteredInterviewPrep, filteredProjectIdeas, filteredLiveSessions, filteredResourceLibrary,
       filteredCommunityForum, filteredPlacementTracker, filteredCareerPathGuides, filteredJntua,
       filteredPdfsMaterials]);

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
        tabCounts={filteredTabCounts}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Search Bar Card - Sticky */}
        <div className="sticky top-[73px] z-40 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3 bg-background/95 backdrop-blur-sm">
          <Card className="shadow-lg border-border/50">
            <CardContent className="p-4">
              <div className="relative" ref={searchContainerRef}>
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search subjects, platforms, categories..."
                  className="pl-12 h-12 text-base bg-background border-border/50 focus:border-primary"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                />
                {searchTerm && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8 px-3 text-muted-foreground hover:text-foreground"
                    onClick={() => {
                      setSearchTerm("");
                      setShowSuggestions(false);
                    }}
                  >
                    Clear
                  </Button>
                )}
                
                {/* Search Suggestions Dropdown */}
                {showSuggestions && searchTerm && (
                  <SearchSuggestions
                    searchTerm={searchTerm}
                    onSelectCategory={(cat) => {
                      setActiveTab(cat);
                      setShowSuggestions(false);
                    }}
                    onSelectItem={(cat) => {
                      setActiveTab(cat);
                      setShowSuggestions(false);
                    }}
                    onClose={() => setShowSuggestions(false)}
                    filteredCounts={filteredTabCounts}
                    items={{
                      subjects: filteredSubjects,
                      platforms: filteredPlatforms,
                      channels: filteredChannels,
                      challenges: filteredChallenges,
                      interviewPrep: filteredInterviewPrep,
                      projectIdeas: filteredProjectIdeas,
                      liveSessions: filteredLiveSessions,
                      resourceLibrary: filteredResourceLibrary,
                      communityForum: filteredCommunityForum,
                      placementTracker: filteredPlacementTracker,
                      careerPathGuides: filteredCareerPathGuides,
                      jntua: filteredJntua,
                      pdfsMaterials: filteredPdfsMaterials,
                    }}
                  />
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="mt-4">
          <StatsSection
            subjectsCount={subjects.length}
            platformsCount={codingPlatforms.length}
            channelsCount={youtubeChannels.length}
            materialsCount={pdfsMaterials.length}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Navigation Panel - Fixed Categories */}
          <Card className={`shrink-0 shadow-lg border-border/50 hidden lg:block transition-all duration-300 ease-in-out sticky top-32 self-start ${
            isSidebarCollapsed ? "w-20" : "w-80 xl:w-96"
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
              <ScrollArea className="h-[calc(100vh-220px)]">
                <div className={`space-y-1.5 ${isSidebarCollapsed ? "p-2" : "p-4"}`}>
                  {/* Recently Viewed Section */}
                  {!isSidebarCollapsed && recentlyViewed.length > 0 && (
                    <div className="mb-4 pb-3 border-b border-border/30">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2 px-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Recently viewed</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {recentlyViewed.slice(0, 3).map((tab) => (
                          <Badge
                            key={tab}
                            variant="outline"
                            className="cursor-pointer text-xs hover:bg-muted/50 transition-colors"
                            onClick={() => setActiveTab(tab)}
                          >
                            {tab}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {TABS.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.name;
                    
                    if (isSidebarCollapsed) {
                      return (
                        <Tooltip key={tab.name} delayDuration={0}>
                          <TooltipTrigger asChild>
                            <button
                              className={`w-full flex items-center justify-center p-3.5 rounded-lg transition-all duration-200 ${
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
                              {filteredTabCounts[tab.name] || 0}
                            </Badge>
                          </TooltipContent>
                        </Tooltip>
                      );
                    }

                    return (
                      <button
                        key={tab.name}
                        className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-lg text-base font-medium transition-all duration-200 group ${
                          isActive
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                        onClick={() => setActiveTab(tab.name)}
                      >
                        <Icon className="w-5 h-5 shrink-0" />
                        <span className="flex-1 text-left truncate">{tab.name}</span>
                        <Badge 
                          variant={isActive ? "secondary" : "outline"} 
                          className={`shrink-0 min-w-[32px] justify-center text-sm tabular-nums ${
                            isActive 
                              ? "bg-primary-foreground/20 text-primary-foreground border-transparent" 
                              : "border-border/50"
                          }`}
                        >
                          {filteredTabCounts[tab.name] || 0}
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
            <AnimatedCard>
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
                        className="flex items-center justify-between p-4 rounded-lg border border-border/30 bg-card hover:bg-muted/50 hover:border-primary/30 transition-all duration-200 group hover:scale-[1.02]"
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
            </AnimatedCard>

            {/* Category Content Card */}
            <AnimatedCard delay={100}>
              <Card className="shadow-lg border-border/50">
                <CardHeader className="border-b border-border/50">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-foreground">{activeTab}</CardTitle>
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      {filteredTabCounts[activeTab] || 0} items
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
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                    searchTerm={searchTerm}
                  />
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>

        <Footer />
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Index;