import axios from "axios";

import generatePrompt from "../generatePrompt.js";




export const generateEmail = async (subject) => {
    const prompt = generatePrompt(subject);
  
    const response = await axios.post('http://localhost:11434/api/generate', {
      model: 'qwen2.5:1.5b',
      prompt,
      temperature: 0.7,
      top_p: 0.9,
      max_tokens: 400,
      stream: false
    });
  
    return response.data.response;
  };
  
  


  
