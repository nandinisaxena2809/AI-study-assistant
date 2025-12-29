import { useState } from "react";
import { Pencil, BookOpenCheck, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { ModeSelector, type Mode } from "@/components/ModeSelector";
import { OutputDisplay } from "@/components/OutputDisplay";
import { callAI } from "@/services/ai";

export function StudyForm() {
  const [mode, setMode] = useState<Mode>("summarize");
  const [notes, setNotes] = useState("");
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!notes.trim()) {
      setError("Oops! Don't forget to paste your notes first 📝");
      return;
    }

    if (mode === "qa" && !question.trim()) {
      setError("What would you like to know? Type your question above 🤔");
      return;
    }

    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const output = await callAI({
        mode,
        notes: notes.trim(),
        question: mode === "qa" ? question.trim() : undefined,
      });

      setResponse(output);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Couldn't connect to the study helper";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const isSubmitDisabled =
    !notes.trim() || (mode === "qa" && !question.trim()) || isLoading;

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Mode Selection */}
      <div className="space-y-3">
        <label className="text-sm font-bold text-foreground flex items-center gap-2">
          <BookOpenCheck className="h-4 w-4 text-primary" />
          How can I help you study?
        </label>
        <ModeSelector value={mode} onChange={setMode} />
      </div>

      {/* Notes Input */}
      <div className="space-y-3">
        <label
          htmlFor="notes"
          className="text-sm font-bold text-foreground flex items-center gap-2"
        >
          <PenLine className="h-4 w-4 text-primary" />
          Your Study Notes
        </label>

        <Textarea
          id="notes"
          placeholder={`Paste or type your notes here... ✏️

For example:
• Lecture notes from class
• Textbook excerpts
• Research you've gathered
• Anything you need to study!`}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="min-h-[220px] text-base leading-7 notebook-lines bg-card resize-y"
        />

        <p className="text-xs text-muted-foreground flex items-center gap-1.5">
          <Pencil className="h-3 w-3" />
          {notes.length > 0
            ? `${notes.length.toLocaleString()} characters — nice work!`
            : "Pro tip: More details = better answers"}
        </p>
      </div>

      {/* Question Input */}
      {mode === "qa" && (
        <div className="space-y-3 animate-fade-in">
          <label
            htmlFor="question"
            className="text-sm font-bold text-foreground"
          >
            What's your question? 🧐
          </label>
          <Input
            id="question"
            placeholder="e.g., What are the main causes of...?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="text-base"
          />
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        variant="gradient"
        size="lg"
        className="w-full text-base font-bold"
        disabled={isSubmitDisabled}
      >
        {isLoading
          ? "Thinking..."
          : mode === "summarize"
          ? "✨ Create My Summary"
          : "🔍 Find the Answer"}
      </Button>

      {/* Output */}
      <div className="pt-2">
        <OutputDisplay
          response={response}
          error={error}
          isLoading={isLoading}
        />
      </div>
    </form>
  );
}
