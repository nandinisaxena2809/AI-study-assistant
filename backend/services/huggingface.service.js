import axios from "axios";

export const callHuggingFace = async (model, payload) => {
  try {
    const HF_API_KEY = process.env.HUGGINGFACE_API_KEY;

    if (!HF_API_KEY) {
      throw new Error("HUGGINGFACE_API_KEY is missing");
    }

    const response = await axios.post(
      `https://router.huggingface.co/hf-inference/models/${model}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        timeout: 30000,
      }
    );

    return response.data;
  } catch (error) {
    console.error("🔥 Hugging Face error:");
    console.error(error.response?.data || error.message);
    throw error;
  }
};
