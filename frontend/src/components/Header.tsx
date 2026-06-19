import { GraduationCap, Sparkles } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="container max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl overflow-hidden shadow-md">
              <img
                src="/favicon.png"
                alt="Study Buddy"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
                Study Buddy
                <Sparkles className="h-4 w-4 text-accent" />
              </h1>
              <p className="text-sm text-muted-foreground">Your personal study helper</p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
