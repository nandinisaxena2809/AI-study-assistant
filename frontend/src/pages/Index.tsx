import { Header } from "@/components/Header";
import { StudyForm } from "@/components/StudyForm";
import { BookOpen, Brain, Target } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen gradient-surface">
      <Header />
      
      <main className="container max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Brain className="h-4 w-4" />
            Study smarter, not harder
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-serif-display">
            Your AI Study Companion
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Paste your notes, and I'll help you understand them better — 
            whether you need a quick summary or have burning questions!
          </p>
        </div>

        {/* Features hint */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BookOpen className="h-4 w-4 text-primary" />
            <span>Instant summaries</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Target className="h-4 w-4 text-primary" />
            <span>Find key concepts</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Brain className="h-4 w-4 text-primary" />
            <span>Answer your questions</span>
          </div>
        </div>

        {/* Main Card */}
        <div className="gradient-paper rounded-3xl border-2 border-border shadow-lg p-6 sm:p-8">
          <StudyForm />
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Made with 💙 for students everywhere
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
