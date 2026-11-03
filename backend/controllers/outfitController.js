import Outfit from "../models/Outfit.js";
import { createOutfitSuggestions } from "../services/outfitGenerationService.js";

export async function generate(req, res) {
  const occasion = String(req.body.occasion || "Casual").slice(0, 80);
  const outfits = await createOutfitSuggestions(req.user._id, occasion);
  res.json({ outfits });
}

export async function listOutfits(req, res) {
  const outfits = await Outfit.find({ userId: req.user._id }).populate("clothingItems").sort({ createdAt: -1 });
  res.json({ outfits });
}

export async function getOutfit(req, res) {
  const outfit = await Outfit.findOne({ _id: req.params.id, userId: req.user._id }).populate("clothingItems");
  if (!outfit) return res.status(404).json({ message: "Outfit not found." });
  res.json({ outfit });
}

export async function toggleFavorite(req, res) {
  const outfit = await Outfit.findOne({ _id: req.params.id, userId: req.user._id });
  if (!outfit) return res.status(404).json({ message: "Outfit not found." });
  outfit.isFavorite = !outfit.isFavorite;
  await outfit.save();
  res.json({ outfit });
}

export async function removeOutfit(req, res) {
  const outfit = await Outfit.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
  if (!outfit) return res.status(404).json({ message: "Outfit not found." });
  res.json({ message: "Outfit deleted." });
}
