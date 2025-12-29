# 📘 Study Buddy - AI Study Assistant

An AI-powered study assistant that helps students summarize study notes and ask context-aware questions using modern NLP models.
Built with a clean React frontend and a Node.js + Express backend, powered by Hugging Face Inference APIs.

This project focuses on real AI integration (not mock data) and clean frontend–backend separation.

---

## ✨ Features

- 📄 Summarize Study Notes : Generate concise academic summaries from long study notes.
- ❓ Contextual Question Answering : Ask questions strictly based on the provided notes.
- ⚡ Real-time AI Processing : Uses Hugging Face models via a live backend API.
- 🎨 Student-friendly UI : Clean, modern interface designed for learners.

---

## 🛠 Tech Stack

### Frontend
- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Lucide Icons

### Backend
- Node.js
- Express.js
- Hugging Face Inference API
- Axios
- dotenv
- CORS

---

## 📂 Project Structure

```text
AI-study-assistant/
├── frontend/
│ ├── src/
│ ├── public/
│ └── package.json
│
├── backend/
│ ├── routes/
│ ├── services/
│ └── server.js
│
└── README.md
```
---

## 🚀 Getting Started Locally

### Clone the repository
```text
git clone https://github.com/<your-username>/ai-study-assistant.git
cd ai-study-assistant
```


### Backend
```text
cd backend
npm install
```
Create a .env file inside backend/:
```text
HUGGINGFACE_API_KEY=your_huggingface_api_key_here
PORT=5000
```
Start the backend:
```text
npm start
```
Backend runs on:
```text
http://localhost:5000
```


### Frontend
```text
cd ../frontend
npm install
npm run dev
```
Frontend runs on:
```text
http://localhost:8080
```

---

## 🔌 API Usage

### Endpoint
```text
POST /api/ai/process
```
### Request Body (Summarize)
```text
{
  "mode": "summarize",
  "notes": "Your study notes here"
}
```
### Request Body (QA)
```text
{
  "mode": "qa",
  "notes": "Your study notes here",
  "question": "Your question here"
}
```
### Response
```text
{
  "output": "AI-generated response"
}
```

---

## 🧠 How It Works
- User enters study notes in the frontend
- Frontend sends a POST request to the backend
- Backend calls Hugging Face Inference API with task-specific prompts
- AI-generated output is returned and displayed in the UI

All AI responses are real and generated live.

---

## ⚠️ Limitations
- AI responses depend on the quality and length of input notes
- Free inference models may have rate limits
- No file uploads or exports (by design)

---

## 🔮 Future Enhancements
- Key point extraction
- Example-based explanations
- Quiz generation
- User authentication
- Deployment with persistent storage


