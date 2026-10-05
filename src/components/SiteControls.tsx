import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSiteSettings } from "@/lib/site-settings";

export function SiteControls() {
  const { theme, setTheme, language, setLanguage } = useSiteSettings();
  return (
    <div className="flex shrink-0 items-center justify-end gap-1 border-l border-border pl-1.5">
      <Button type="button" variant="ghost" size="icon" title={theme === "dark" ? "Switch to light appearance" : "Switch to dark appearance"} aria-label={theme === "dark" ? "Switch to light appearance" : "Switch to dark appearance"} onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="h-9 w-9 rounded-lg text-foreground hover:bg-secondary hover:text-foreground">
        <span className={`grid place-items-center transition-transform duration-300 motion-reduce:transition-none ${theme === "dark" ? "rotate-0" : "rotate-180"}`}>
          {theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
        </span>
      </Button>
      <Button type="button" variant="ghost" size="sm" title={language === "en" ? "Passer en français" : "Switch to English"} aria-label={language === "en" ? "Switch to French" : "Switch to English"} onClick={() => setLanguage(language === "en" ? "fr" : "en")} className="h-9 min-w-10 rounded-lg px-2 text-xs font-bold text-primary transition-all duration-300 hover:bg-secondary hover:text-primary motion-reduce:transition-none">
        <span key={language} className="animate-in fade-in zoom-in-90 duration-300 motion-reduce:animate-none">{language.toUpperCase()}</span>
      </Button>
    </div>
  );
}
