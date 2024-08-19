import { Moon, Sun } from "lucide-react";
import { Theme, useTheme } from "remix-themes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

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
      <SelectTrigger className="w-auto">
        <SelectValue>
          {options.find((option) => option.value === currentTheme)?.icon}
        </SelectValue>
      </SelectTrigger>
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
