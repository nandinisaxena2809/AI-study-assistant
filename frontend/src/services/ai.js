const API_URL = "http://localhost:5000/api/ai/process";

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

  // 🔑 backend ALWAYS returns { output: string }
  return data.output;
}
