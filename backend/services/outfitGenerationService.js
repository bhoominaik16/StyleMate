import Clothing from "../models/Clothing.js";
import Outfit from "../models/Outfit.js";
import User from "../models/User.js";
import { generateText, parseJsonResponse } from "./geminiService.js";
import { outfitPrompt } from "../utils/promptTemplates.js";

export async function createOutfitSuggestions(userId, occasion) {
  const [items, user] = await Promise.all([
    Clothing.find({ userId }).lean(),
    User.findById(userId).select("preferences").lean()
  ]);
  if (items.length < 2) throw new Error("Add at least two clothing items before generating outfits.");

  const raw = await generateText(outfitPrompt(items, occasion, user?.preferences || {}));
  const parsed = parseJsonResponse(raw);
  const allowed = new Set(items.map(i => String(i._id)));
  const created = [];

  for (const suggestion of (parsed.outfits || []).slice(0, 3)) {
    const ids = (suggestion.clothingItemIds || []).filter(id => allowed.has(String(id)));
    if (!ids.length) continue;
    const outfit = await Outfit.create({
      userId,
      name: suggestion.name || `${occasion} outfit`,
      clothingItems: ids,
      occasion,
      explanation: suggestion.explanation || "",
      stylingTips: Array.isArray(suggestion.stylingTips) ? suggestion.stylingTips : []
    });
    created.push(outfit);
  }
  return Outfit.find({ _id: { $in: created.map(o => o._id) } }).populate("clothingItems");
}
