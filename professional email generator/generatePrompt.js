function generatePrompt(subject) {
    return `
  You are an AI assistant that writes professional emails.
  
  Generate a complete professional email including:
  - A clear, formal subject line
  - A concise and polite body with a professional tone
  - A closing line that says: "Thanks & Regards, Your Name"
  
  Write the email based on the following topic:
  "${subject}"
    `.trim();
  };

  export default generatePrompt;
  