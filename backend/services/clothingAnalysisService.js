import { analyzeImage, parseJsonResponse } from "./geminiService.js";

export async function analyzeClothingImage(buffer, mimetype) {
  const raw = await analyzeImage(buffer, mimetype);
  return parseJsonResponse(raw);
}
