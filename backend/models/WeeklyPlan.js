import mongoose from "mongoose";

const weeklyPlanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
  date: { type: Date, required: true },
  outfitId: { type: mongoose.Schema.Types.ObjectId, ref: "Outfit", required: true },
  occasion: { type: String, default: "" },
  notes: { type: String, default: "" }
}, { timestamps: true });

weeklyPlanSchema.index({ userId: 1, date: 1 }, { unique: true });
export default mongoose.model("WeeklyPlan", weeklyPlanSchema);
