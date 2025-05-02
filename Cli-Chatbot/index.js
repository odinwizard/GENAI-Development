import readline from 'readline';

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'You: '
});


async function chatBot(prompt) {
    try {
        const response = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                model: 'deepseek-r1:1.5b',
                prompt: prompt,
                stream: false
            })         
        });
        const data = await response.json();
        console.log(`AI: ${data.response.trim()}\n`);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Start the chat
console.log('Welcome to the AI Chatbot! Type "exit" to quit.\n');
r1.prompt();

r1.on('line', async (input) => {
    if(input.trim().toLowerCase() === 'exit') {
        r1.close();
        return;
    }

    await chatBot(input);
    r1.prompt();
});