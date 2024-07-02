import { useState } from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  RulerSquareIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { Slider } from "@/components/ui/slider"; // Import the Slider component

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (values: [number, number]) => void;
  maxPrice: number;
}

export function Sidebar({
  className,
  categories,
  selectedCategories,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  maxPrice,
}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("pb-12", className)}>
      <div className="px-3 py-2 lg:hidden">
        <div className="flex flex-row justify-between items-center">
          <h1 className="mb-2 text-2xl font-semibold tracking-tight lg:hidden">
            Filters
          </h1>
          {isOpen ? (
            <ChevronUpIcon
              className="h-4 w-4 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <ChevronDownIcon
              className="h-4 w-4 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
        <Separator />
      </div>
      <div
        className={cn(
          "space-y-4 py-4",
          "lg:block",
          isOpen ? "block" : "hidden"
        )}
      >
        <div className="px-3 lg:py-2">
          <h1 className="mb-2 text-2xl font-semibold tracking-tight hidden lg:block">
            Filters
          </h1>
          <Separator className="hidden lg:block" />
          <h2 className="mb-2 lg:pt-4 text-lg font-semibold tracking-tight inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="14" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
            Category
          </h2>
          <div className="space-y-1">
            <div className="flex flex-col items-start gap-2 border rounded-md py-2">
              {categories.map((category) => (
                <Label
                  key={category}
                  htmlFor={category}
                  className="ml-1 w-full mr-2 justify-start cursor-pointer px-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800 capitalize"
                >
                  <Checkbox
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => onCategoryChange(category)}
                  />
                  {category}
                </Label>
              ))}
            </div>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 pt-4 text-lg font-semibold tracking-tight inline-flex items-center">
            <RulerSquareIcon className="mr-2" />
            Price Range
          </h2>
          <div className="space-y-1">
            <Slider
              min={0}
              max={maxPrice}
              step={1}
              value={priceRange}
              onValueChange={onPriceRangeChange}
              className="w-full"
            />
            <div className="flex justify-between mt-2">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
