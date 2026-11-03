import mongoose from "mongoose";

const outfitSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
  name: { type: String, required: true },
  clothingItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "Clothing" }],
  occasion: { type: String, default: "Casual" },
  explanation: { type: String, default: "" },
  stylingTips: { type: [String], default: [] },
  isFavorite: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model("Outfit", outfitSchema);
