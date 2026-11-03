import Clothing from "../models/Clothing.js";
import { generateText } from "./geminiService.js";

export async function askStyleMate(userId, message) {
  const items = await Clothing.find({ userId }).select("name category color style pattern").lean();
  const prompt = `You are StyleMate, a friendly and practical personal fashion assistant.
Answer the user's fashion question clearly and concisely.
The user's wardrobe is: ${JSON.stringify(items)}.
Prefer suggestions using their existing wardrobe. Never claim they own items not listed.
If the request needs weather information, say you do not have live weather data.
User question: ${message}`;
  return generateText(prompt);
}
