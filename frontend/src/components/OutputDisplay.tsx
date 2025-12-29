import { BookMarked, AlertCircle, Loader2, Lightbulb, NotebookText } from "lucide-react";

interface OutputDisplayProps {
  response: string | null;
  error: string | null;
  isLoading: boolean;
}

export function OutputDisplay({ response, error, isLoading }: OutputDisplayProps) {
  if (isLoading) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-8 animate-fade-in">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="relative">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Loader2 className="h-7 w-7 text-primary animate-spin-slow" />
            </div>
          </div>
          <div>
            <p className="font-bold text-foreground">Reading through your notes...</p>
            <p className="text-sm text-muted-foreground mt-1">
              Give me a moment to find the good stuff 📚
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border-2 border-destructive/30 bg-destructive/5 p-6 animate-fade-in">
        <div className="flex items-start gap-4">
          <div className="h-11 w-11 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
            <AlertCircle className="h-5 w-5 text-destructive" />
          </div>
          <div>
            <p className="font-bold text-destructive">Hmm, that didn't work</p>
            <p className="text-sm text-muted-foreground mt-1">{error}</p>
            <p className="text-sm text-muted-foreground mt-2">Try again in a moment! 💪</p>
          </div>
        </div>
      </div>
    );
  }

  if (response) {
    return (
      <div className="rounded-2xl border-2 border-accent/40 bg-card animate-fade-in overflow-hidden">
        {/* Header */}
        <div className="bg-accent/10 px-5 py-3 border-b border-accent/20 flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-accent/20 flex items-center justify-center">
            <BookMarked className="h-4 w-4 text-accent" />
          </div>
          <div>
            <p className="font-bold text-accent text-sm">Your Study Notes</p>
            <p className="text-xs text-muted-foreground">Ready for revision ✓</p>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5 sm:p-6">
          <div className="prose-study text-foreground whitespace-pre-wrap leading-relaxed">
            {response}
          </div>
        </div>

        {/* Footer tip */}
        <div className="bg-secondary/50 px-5 py-3 border-t border-border">
          <p className="text-xs text-muted-foreground flex items-center gap-2">
            <Lightbulb className="h-3.5 w-3.5 text-accent" />
            Tip: Review this before your exam for quick recall!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border-2 border-dashed border-border bg-secondary/30 p-8 text-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center">
          <NotebookText className="h-7 w-7 text-muted-foreground" />
        </div>
        <div>
          <p className="font-semibold text-muted-foreground">Your study material will appear here</p>
          <p className="text-sm text-muted-foreground/70 mt-1">
            Paste your notes above and let's get studying! 📖
          </p>
        </div>
      </div>
    </div>
  );
}
