import { NotebookPen, MessageCircleQuestion } from "lucide-react";
import { cn } from "@/lib/utils";

export type Mode = "summarize" | "qa";

interface ModeSelectorProps {
  value: Mode;
  onChange: (mode: Mode) => void;
}

const modes = [
  {
    id: "summarize" as const,
    label: "Make a Summary",
    description: "Turn your notes into key points for quick revision",
    icon: NotebookPen,
  },
  {
    id: "qa" as const,
    label: "Ask Me Anything",
    description: "Got a question? I'll find the answer in your notes",
    icon: MessageCircleQuestion,
  },
];

export function ModeSelector({ value, onChange }: ModeSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {modes.map((mode) => {
        const Icon = mode.icon;
        const isSelected = value === mode.id;

        return (
          <button
            key={mode.id}
            type="button"
            onClick={() => onChange(mode.id)}
            className={cn(
              "relative flex items-start gap-3 p-4 rounded-2xl border-2 text-left transition-all duration-200",
              isSelected
                ? "border-primary bg-primary/5 shadow-md"
                : "border-border bg-card hover:border-primary/40 hover:shadow-sm"
            )}
          >
            <div
              className={cn(
                "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-200",
                isSelected ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p
                className={cn(
                  "font-bold transition-colors duration-200",
                  isSelected ? "text-primary" : "text-foreground"
                )}
              >
                {mode.label}
              </p>
              <p className="text-sm text-muted-foreground mt-0.5 leading-snug">
                {mode.description}
              </p>
            </div>
            {isSelected && (
              <div className="absolute top-3 right-3 h-2.5 w-2.5 rounded-full bg-accent animate-pulse-subtle" />
            )}
          </button>
        );
      })}
    </div>
  );
}
