import WeeklyPlan from "../models/WeeklyPlan.js";
import Outfit from "../models/Outfit.js";

export async function listPlans(req, res) {
  const from = req.query.from ? new Date(req.query.from) : new Date(new Date().setDate(new Date().getDate() - 1));
  const to = req.query.to ? new Date(req.query.to) : new Date(new Date().setDate(new Date().getDate() + 7));
  const plans = await WeeklyPlan.find({ userId: req.user._id, date: { $gte: from, $lte: to } })
    .populate({ path: "outfitId", populate: { path: "clothingItems" } }).sort({ date: 1 });
  res.json({ plans });
}

export async function createPlan(req, res) {
  const { date, outfitId, occasion, notes } = req.body;
  if (!date || !outfitId) return res.status(400).json({ message: "Date and outfit are required." });
  const outfit = await Outfit.findOne({ _id: outfitId, userId: req.user._id });
  if (!outfit) return res.status(404).json({ message: "Outfit not found." });
  const plan = await WeeklyPlan.findOneAndUpdate(
    { userId: req.user._id, date: new Date(date) },
    { userId: req.user._id, date: new Date(date), outfitId, occasion: occasion || "", notes: notes || "" },
    { new: true, upsert: true, runValidators: true }
  ).populate({ path: "outfitId", populate: { path: "clothingItems" } });
  res.status(201).json({ plan });
}

export async function updatePlan(req, res) {
  const plan = await WeeklyPlan.findOne({ _id: req.params.id, userId: req.user._id });
  if (!plan) return res.status(404).json({ message: "Plan not found." });
  for (const key of ["date", "outfitId", "occasion", "notes"]) if (req.body[key] !== undefined) plan[key] = req.body[key];
  if (plan.outfitId) {
    const valid = await Outfit.exists({ _id: plan.outfitId, userId: req.user._id });
    if (!valid) return res.status(404).json({ message: "Outfit not found." });
  }
  await plan.save();
  res.json({ plan: await plan.populate({ path: "outfitId", populate: { path: "clothingItems" } }) });
}

export async function deletePlan(req, res) {
  const plan = await WeeklyPlan.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
  if (!plan) return res.status(404).json({ message: "Plan not found." });
  res.json({ message: "Plan deleted." });
}
