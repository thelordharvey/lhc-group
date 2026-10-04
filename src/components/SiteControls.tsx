import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSiteSettings } from "@/lib/site-settings";

export function SiteControls() {
  const { theme, setTheme, language, setLanguage } = useSiteSettings();
  return (
    <div className="flex shrink-0 items-center gap-2">
      <Button type="button" variant="ghost" size="icon" title={theme === "dark" ? "Switch to light appearance" : "Switch to dark appearance"} aria-label={theme === "dark" ? "Switch to light appearance" : "Switch to dark appearance"} onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="h-11 w-11 rounded-2xl liquid-glass liquid-glass-sheen text-foreground shadow-lg hover:brightness-125 hover:bg-transparent">
        {theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
      </Button>
      <div className="flex h-11 items-center rounded-2xl liquid-glass liquid-glass-sheen p-1 shadow-lg" role="group" aria-label="Language / Langue">
        <Button type="button" variant="ghost" size="sm" aria-label="English" aria-pressed={language === "en"} onClick={() => setLanguage("en")} className={`h-9 min-w-9 rounded-xl px-2 text-xs hover:bg-secondary ${language === "en" ? "bg-primary text-primary-foreground hover:text-primary-foreground" : "text-muted-foreground"}`}>EN</Button>
        <Button type="button" variant="ghost" size="sm" aria-label="Français" aria-pressed={language === "fr"} onClick={() => setLanguage("fr")} className={`h-9 min-w-9 rounded-xl px-2 text-xs hover:bg-secondary ${language === "fr" ? "bg-primary text-primary-foreground hover:text-primary-foreground" : "text-muted-foreground"}`}>FR</Button>
      </div>
    </div>
  );
}
