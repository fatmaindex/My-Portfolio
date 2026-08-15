import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("fg-theme");
    const isLight = stored === "light";
    setLight(isLight);
    document.documentElement.classList.toggle("light", isLight);
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("fg-theme", next ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="relative grid size-9 shrink-0 place-items-center overflow-hidden rounded-full border border-border bg-surface/60 text-foreground backdrop-blur transition-transform duration-300 hover:scale-110 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
    >
      <Sun
        className={`absolute inset-0 m-auto size-4 transition-all duration-500 ${
          light ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        }`}
      />
      <Moon
        className={`absolute inset-0 m-auto size-4 transition-all duration-500 ${
          light ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      />
    </button>
  );
}