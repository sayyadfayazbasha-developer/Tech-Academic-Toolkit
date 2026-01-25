import { useEffect, useState } from "react";
import { BookOpen, Code2, Youtube, FileText, Users, TrendingUp } from "lucide-react";

interface StatItemProps {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix?: string;
}

const StatItem = ({ icon: Icon, value, label, suffix = "" }: StatItemProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const steps = 30;
    const stepValue = value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCount(Math.min(Math.round(stepValue * currentStep), value));
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card/50 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <span className="text-2xl md:text-3xl font-bold text-foreground tabular-nums">
        {count}{suffix}
      </span>
      <span className="text-sm text-muted-foreground text-center">{label}</span>
    </div>
  );
};

interface StatsSectionProps {
  subjectsCount: number;
  platformsCount: number;
  channelsCount: number;
  materialsCount: number;
}

export const StatsSection = ({
  subjectsCount,
  platformsCount,
  channelsCount,
  materialsCount,
}: StatsSectionProps) => {
  const totalResources = subjectsCount + platformsCount + channelsCount + materialsCount;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
      <StatItem icon={BookOpen} value={subjectsCount} label="Subjects" />
      <StatItem icon={Code2} value={platformsCount} label="Platforms" />
      <StatItem icon={Youtube} value={channelsCount} label="Channels" />
      <StatItem icon={FileText} value={materialsCount} label="Materials" />
      <StatItem icon={Users} value={13} label="Categories" />
      <StatItem icon={TrendingUp} value={totalResources} label="Total Resources" suffix="+" />
    </div>
  );
};
