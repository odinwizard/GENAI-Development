
import 'dotenv/config';
import { OpenAI } from 'openai';
import readline from 'readline';

const client = new OpenAI();

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

async function chat() {
	let messages = [];
	console.log('Start chatting with the AI (type "exit" to quit):');
	while (true) {
		const userInput = await new Promise(resolve => rl.question('You: ', resolve));
		if (userInput.trim().toLowerCase() === 'exit') break;
		messages.push({ role: 'user', content: userInput });
		const response = await client.chat.completions.create({
			model: 'gpt-4.1-mini',
			messages
		});
		const aiReply = response.choices[0].message.content;
		console.log('AI:', aiReply);
		messages.push({ role: 'assistant', content: aiReply });
	}
	rl.close();
}

chat();


