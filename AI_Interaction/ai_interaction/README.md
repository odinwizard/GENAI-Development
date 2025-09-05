# Nicy - AI Chat Application

Nicy is an AI-powered chat application built with Next.js and OpenAI. This project provides a modern chat interface and leverages OpenAI's GPT models for intelligent conversation. The project is designed for easy extension and future enhancements.

## Features
- Modern chat UI built with React and Tailwind CSS
- Backend API integration with OpenAI (supports GPT-3.5/4)
- Environment-based configuration for API keys
- Ready for future features and improvements

## Getting Started



# Nicy - AI Chat Application

Nicy is an AI-powered chat application built with Next.js and OpenAI. It provides a modern chat interface and leverages OpenAI's GPT models for intelligent conversation. The project is designed for easy extension and future enhancements.

## Features
- Modern chat UI built with React and Tailwind CSS
- Backend API integration with OpenAI (supports GPT-3.5/4)
- Environment-based configuration for API keys
- Ready for future features and improvements

## Getting Started

1. **Clone the Repository**
	```bash
	git clone <your-repo-url>
	cd ai_interaction
	```

2. **Install Dependencies**
	```
	npm install
	```

3. **Set Up Environment Variables**
	Create a `.env.local` file in the root directory:
	```env
	OPENAI_API_KEY=your_openai_api_key_here
	```

4. **Run the Development Server**
	```
	npm run dev
	```

## Project Structure

ai_interaction/
├── public/           # Static assets
├── src/
│   ├── pages/
│   │   ├── api/
│   │   │   └── chat.js   # Backend API route for chat
│   │   └── index.js      # Main chat UI
│   └── styles/           # Global styles
├── .env.local        # Environment variables
├── package.json      # Project dependencies
└── README.md         # Project documentation

## How It Works
- The frontend (React) sends user messages to `/api/chat`.
- The backend API route (`/api/chat`) forwards the message to OpenAI and returns the AI's response.
- The chat UI displays the conversation in real time.

## Future Plans
- User authentication and profiles
- Chat history and persistence
- Support for multiple AI models
- File uploads and image generation
- Voice input/output
- Admin dashboard and analytics
- More features to come

## Contributing
Contributions and suggestions for new features are welcome.

