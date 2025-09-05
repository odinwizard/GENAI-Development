import 'dotenv/config';
import { OpenAI } from 'openai';

const client = new OpenAI();

async function main() {
   const response = await  client.chat.completions.create({
        model: 'gpt-4.1-mini',
        messages:[{role: 'user', content: 'Hey, How are you?'}],
    });
    console.log(response.choices[0].message.content);
}

main();
