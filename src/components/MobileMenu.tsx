import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabCounts: Record<string, number>;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const MobileMenu = ({
  isOpen,
  onClose,
  tabs,
  activeTab,
  setActiveTab,
  tabCounts,
  searchTerm,
  setSearchTerm,
}: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex flex-col p-6 animate-in slide-in-from-left duration-300">
      <div className="flex justify-end mb-6">
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="w-6 h-6" />
        </Button>
      </div>
      
      <Input
        type="text"
        placeholder="Search categories..."
        className="mb-6"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`text-left py-3 px-4 rounded-lg transition-colors duration-200 font-medium ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
              onClick={() => {
                setActiveTab(tab);
                onClose();
              }}
            >
              {tab} ({tabCounts[tab] || 0})
            </button>
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
};
