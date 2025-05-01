import axios from 'axios';

async function askingUser(prompt) {
  try {
    const res = await axios.post('http://localhost:11434/api/generate', {
      model: 'deepseek-r1:1.5b',
      prompt: prompt,
      stream: false
    });
    console.log('AI:', res.data.response);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

// Example prompt for a code task
askingUser('Write a JavaScript function to reverse a string.');
