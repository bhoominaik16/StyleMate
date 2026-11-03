import { GoogleGenAI } from "@google/genai";

export function getGemini() {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("Gemini is not configured. Add GEMINI_API_KEY to backend/.env");
  }
  return new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
}

export const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";
