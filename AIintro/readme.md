# AIintro Project Guide

This guide will walk you through creating a token encoder/decoder using `tiktoken` and generating vector embeddings with OpenAI.

## Prerequisites

- Node.js installed
- `pnpm` or `npm` for package management
- OpenAI API key

## 1. Install Dependencies

```
pnpm add tiktoken openai dotenv
```
Or, if you use npm:
```
npm install tiktoken openai dotenv
```

## 2. Set Up Environment Variables

Create a `.env` file in your project root:
```
OPENAI_API_KEY=your_openai_api_key_here
```

## 3. Token Encode/Decode with tiktoken

Create a file named `token.js`:

```js
const { encoding_for_model } = require('tiktoken');

const enc = encoding_for_model('gpt-3.5-turbo');
const text = "Hello, world!";
const encoded = enc.encode(text);
console.log('Encoded:', encoded);
const decoded = enc.decode(encoded);
console.log('Decoded:', decoded);
```

Run the script:
```
node token.js
```

## 4. Generate Vector Embeddings with OpenAI

Create a file named `embeddings.js`:

```js
import 'dotenv/config';
import { OpenAI } from 'openai';

const client = new OpenAI();

async function init() {
    const result = await client.embeddings.create({
    model: 'text-embedding-3-small',
    input: 'I am a developer',
    encoding_format: "float"
    })
console.log(result.data);
}

init();
```

Run the script:
```
node embeddings.js
```

## 5. Summary

- Use `tiktoken` for encoding/decoding tokens.
- Use OpenAI API for generating vector embeddings.
- Store your API key securely in `.env`.

Refer to the official documentation for advanced usage.
