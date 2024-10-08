import { Moon, Sun } from "lucide-react";
import { type Theme, useTheme } from "remix-themes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  const options = [
    {
      value: "light",
      icon: <Sun size={16} />,
    },
    {
      value: "dark",
      icon: <Moon size={16} />,
    },
  ];
  const currentTheme = theme ?? "dark";

  return (
    <Select
      value={currentTheme}
      defaultValue="system"
      onValueChange={(value) => {
        setTheme(value as Theme);
      }}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <SelectTrigger className="w-auto" showChevron={false}>
              <SelectValue>
                {options.find((option) => option.value === currentTheme)?.icon}
              </SelectValue>
            </SelectTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs">Change dark mode</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <SelectContent>
        {options.map((themeOption) => (
          <SelectItem key={themeOption.value} value={themeOption.value}>
            <div className="flex space-x-2 items-center">
              {themeOption.icon}
              <p>{themeOption.value}</p>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
