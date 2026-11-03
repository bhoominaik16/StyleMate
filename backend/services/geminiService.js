import { getGemini, GEMINI_MODEL } from "../config/gemini.js";

export async function generateText(prompt) {
  const ai = getGemini();
  const response = await ai.models.generateContent({
    model: GEMINI_MODEL,
    contents: prompt
  });
  return response.text || "";
}

export async function analyzeImage(buffer, mimetype) {
  const ai = getGemini();
  const response = await ai.models.generateContent({
    model: GEMINI_MODEL,
    contents: [{
      parts: [
        { inlineData: { mimeType: mimetype, data: buffer.toString("base64") } },
        { text: `Analyze this single clothing/accessory image for a personal digital wardrobe.
Return ONLY JSON with keys: name, category, subcategory, color, pattern, style, season, description.
category must be one of: Top, Bottom, Dress, Footwear, Accessory, Outerwear, Other.
Use concise values. Do not infer brand, price, gender, or personal attributes. If uncertain, use Other or an empty string.` }
      ]
    }]
  });
  return response.text || "";
}

export function parseJsonResponse(text) {
  const cleaned = text.replace(/```json/gi, "").replace(/```/g, "").trim();
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start < 0 || end < 0) throw new Error("The AI returned an invalid response. Please try again.");
  return JSON.parse(cleaned.slice(start, end + 1));
}
