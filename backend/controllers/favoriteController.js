import Outfit from "../models/Outfit.js";

export async function listFavorites(req, res) {
  const outfits = await Outfit.find({ userId: req.user._id, isFavorite: true }).populate("clothingItems").sort({ updatedAt: -1 });
  res.json({ outfits });
}
