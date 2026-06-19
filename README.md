# 📘 Study Buddy - AI Study Assistant

An LLM-powered study assistant that helps students summarize study notes and ask context-aware questions using Hugging Face-hosted language models.
Built with a clean React frontend and a Node.js + Express backend, powered by Hugging Face Inference APIs.

This project focuses on real AI integration (not mock data) and clean frontend–backend separation.

---

## 🌐 Live Demo

🔗 https://study-buddy-ai-study-assistant.vercel.app/

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

## 🚀 Deployment

- Frontend: Vercel
- Backend: Render
- AI Inference: Hugging Face Inference API

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
git clone https://github.com/nandinisaxena2809/ai-study-assistant.git
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

Note: The frontend automatically uses the local backend when running on localhost and the deployed backend in production.

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

## 🧪 API Testing with Thunder Client
All backend APIs were tested using Thunder Client, a lightweight REST client extension for VS Code.

### Why Thunder Client?
- Integrated directly into VS Code
- Faster and lighter than Postman
- Ideal for testing local APIs during development

### Tested Endpoint
```text
POST http://localhost:5000/api/ai/process
```
### Required Headers
```text
{
  "Content-Type": "application/json"
}
```
### Test Case 1: Summarize Study Notes
#### Request Body
```text
{
  "mode": "summarize",
  "notes": "Operating systems manage computer hardware and software resources including memory, processes, and file systems."
}
```
#### Expected Response
```text
{
  "output": "Operating systems manage hardware and software resources such as memory, processes, and file systems."
}
```
### Test Case 2: Question Answering
#### Request Body
```text
{
  "mode": "qa",
  "notes": "Round Robin Scheduling assigns each process a fixed time slice in a cyclic order to ensure fairness.",
  "question": "What does Round Robin Scheduling ensure?"
}
```
#### Expected Response
```text
{
  "output": "It ensures fairness."
}
```
### Purpose of API Testing
- Verified correct request–response flow
- Confirmed AI responses are generated live (no mocked data)
- Validated backend behavior independently of frontend
- Ensured API contract consistency before UI integration

---

## 🧠 How It Works
- User enters study notes and selects a task (Summarization or Q&A)
- Frontend sends a POST request to the Express backend
- Backend constructs task-specific prompts and sends them to Hugging Face Inference APIs
- Hugging Face-hosted LLMs generate responses based on the provided notes
- Generated output is returned to the frontend and displayed to the user

All responses are generated in real time using live LLM inference.

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


