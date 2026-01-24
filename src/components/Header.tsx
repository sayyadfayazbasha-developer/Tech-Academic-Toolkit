import { GraduationCap, Mail, Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  const scrollToFooter = () => {
    document.getElementById('contact-footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="p-3 bg-primary rounded-xl shadow-lg">
            <GraduationCap className="w-7 h-7 text-primary-foreground" />
          </div>
          <Sparkles className="w-4 h-4 text-chart-4 absolute -top-1 -right-1" />
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
            Tech Academic Toolkit
          </h1>
          <p className="text-sm text-muted-foreground hidden sm:block">
            Your complete resource hub for engineering success
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          onClick={scrollToFooter}
          className="hidden md:flex items-center gap-2 border-border/50 hover:bg-muted/50"
        >
          <Mail className="w-4 h-4" />
          Contact
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={onMenuClick}
          className="lg:hidden border-border/50"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
};
