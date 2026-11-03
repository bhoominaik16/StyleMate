import mongoose from "mongoose";

const clothingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
  imageUrl: { type: String, required: true },
  cloudinaryPublicId: { type: String, default: "" },
  name: { type: String, default: "" },
  category: { type: String, enum: ["Top", "Bottom", "Dress", "Footwear", "Accessory", "Outerwear", "Other"], default: "Other" },
  subcategory: { type: String, default: "" },
  color: { type: String, default: "" },
  pattern: { type: String, default: "" },
  style: { type: String, default: "" },
  season: { type: String, default: "" },
  description: { type: String, default: "" }
}, { timestamps: true });

export default mongoose.model("Clothing", clothingSchema);
