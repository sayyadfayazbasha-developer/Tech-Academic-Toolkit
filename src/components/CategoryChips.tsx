import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface CategoryChipsProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export const CategoryChips = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryChipsProps) => {
  const uniqueCategories = [...new Set(categories)].sort();

  return (
    <ScrollArea className="w-full whitespace-nowrap pb-2">
      <div className="flex gap-2">
        <Badge
          variant={selectedCategory === null ? "default" : "outline"}
          className="cursor-pointer px-4 py-2 text-sm font-medium transition-all hover:scale-105"
          onClick={() => onSelectCategory(null)}
        >
          All
        </Badge>
        {uniqueCategories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className="cursor-pointer px-4 py-2 text-sm font-medium transition-all hover:scale-105 whitespace-nowrap"
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
