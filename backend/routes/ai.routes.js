import express from "express";
import { callHuggingFace } from "../services/huggingface.service.js";

const router = express.Router();

router.post("/process", async (req, res) => {
  const { mode, notes, question } = req.body;

  if (!mode || !notes) {
    return res.status(400).json({ error: "Mode and notes are required" });
  }

  try {
    /* -------------------- 1. SUMMARIZE -------------------- */
    if (mode === "summarize") {
      const result = await callHuggingFace(
        "facebook/bart-large-cnn",
        { inputs: notes }
      );
      return res.json({ output: result[0].summary_text });
    }


    /* -------------------- 3. QUESTION ANSWERING -------------------- */
    if (mode === "qa") {
      if (!question) {
        return res.status(400).json({ error: "Question is required" });
      }

      const result = await callHuggingFace(
        "deepset/roberta-base-squad2",
        {
          inputs: {
            question,
            context: notes,
          },
        }
      );

      return res.json({ output: result.answer });
    }


    return res.status(400).json({ error: "Invalid mode" });
  } catch (err) {
    console.error("AI route error:", err.message);
    return res.status(500).json({ error: "AI processing failed" });
  }
});

export default router;
