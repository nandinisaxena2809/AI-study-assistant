const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000/api/ai/process"
    : "https://ai-study-assistant-gyls.onrender.com/api/ai/process";

export async function callAI({ mode, notes, question }) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mode,
      notes,
      question,
    }),
  });

  if (!res.ok) {
    throw new Error(`API failed with status ${res.status}`);
  }

  const data = await res.json();
  return data.output;
}
