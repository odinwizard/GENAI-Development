import axios from "axios";
import generatePrompt from "../generatePrompt.js";

export const generateEmail = async (subject) => {
  // Ensure input is a string
  const inputText = String(subject);

  const prompt = generatePrompt(inputText);

  const response = await axios.post('http://localhost:11434/api/generate', {
    model: 'qwen2.5:1.5b',
    prompt,
     temperature: 0.3,
     top_p: 0.8,
    max_tokens: 400,
    stream: false
  });

  const rawOutput = response.data.response;

  // Extract content inside the first code block (``` ... ```)
  const match = rawOutput.match(/```(?:\w*\n)?([\s\S]*?)```/);

  return match ? match[1].trim() : rawOutput.trim();
};
