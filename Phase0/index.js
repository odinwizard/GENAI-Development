import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = 'AIzaSyBhPlK_ZcFLnDd3XKvvNtMjp4lHLfYMgRk';

const client = new GoogleGenAI({
    apiKey: GEMINI_API_KEY,
});


function getWeatherDetails(city = "") {
    if (city.toLowerCase() === "kolkata") {
        return "The weather in kolkata is sunny with a high of 30°C.";
    }
    if (city.toLowerCase() === "delhi") {
        return "The weather in delhi is cloudy with a high of 25°C.";
    }
    if (city.toLowerCase() === "mumbai") {
        return "The weather in mumbai is rainy with a high of 28°C.";
    }
    if (city.toLowerCase() === "chennai") {
        return "The weather in chennai is hot with a high of 35°C.";
    }
    if (city.toLowerCase() === "bangalore") {
        return "The weather in bangalore is pleasant with a high of 27°C.";
    }
    if (city.toLowerCase() === "hyderabad") {
        return "The weather in hyderabad is humid with a high of 29°C.";
    }
    if (city.toLowerCase() === "pune") {
        return "The weather in pune is cool with a high of 26°C.";
    }
}

const user = 'Hey , What is the weather in kolkata?';

async function getAIResponse() {
    const response = await client.models.generateContent({
        model: 'gemini',
        messages:[{ role: 'user', content: user }], 
    });
    console.log("AI Response:", response.text);
}
await getAIResponse();