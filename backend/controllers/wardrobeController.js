import Clothing from "../models/Clothing.js";
import { uploadImage, deleteImage } from "../services/cloudinaryService.js";
import { analyzeClothingImage } from "../services/clothingAnalysisService.js";

export async function analyze(req, res) {
  if (!req.file) return res.status(400).json({ message: "Please select an image." });
  const details = await analyzeClothingImage(req.file.buffer, req.file.mimetype);
  res.json({ details });
}

export async function createClothing(req, res) {
  if (!req.file) return res.status(400).json({ message: "Please select an image." });
  const uploaded = await uploadImage(req.file.buffer, req.file.mimetype);
  const fields = req.body;
  const clothing = await Clothing.create({
    userId: req.user._id,
    imageUrl: uploaded.imageUrl,
    cloudinaryPublicId: uploaded.publicId,
    name: fields.name || "My clothing item",
    category: fields.category || "Other",
    subcategory: fields.subcategory || "",
    color: fields.color || "",
    pattern: fields.pattern || "",
    style: fields.style || "",
    season: fields.season || "",
    description: fields.description || ""
  });
  res.status(201).json({ clothing });
}

export async function listClothing(req, res) {
  const filter = { userId: req.user._id };
  if (req.query.category && req.query.category !== "All") filter.category = req.query.category;
  if (req.query.search) filter.$or = [
    { name: new RegExp(escapeRegex(req.query.search), "i") },
    { color: new RegExp(escapeRegex(req.query.search), "i") },
    { category: new RegExp(escapeRegex(req.query.search), "i") }
  ];
  const clothing = await Clothing.find(filter).sort({ createdAt: -1 });
  res.json({ clothing });
}

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export async function getClothing(req, res) {
  const clothing = await Clothing.findOne({ _id: req.params.id, userId: req.user._id });
  if (!clothing) return res.status(404).json({ message: "Clothing item not found." });
  res.json({ clothing });
}

export async function updateClothing(req, res) {
  const clothing = await Clothing.findOne({ _id: req.params.id, userId: req.user._id });
  if (!clothing) return res.status(404).json({ message: "Clothing item not found." });
  const allowed = ["name", "category", "subcategory", "color", "pattern", "style", "season", "description"];
  allowed.forEach(key => { if (req.body[key] !== undefined) clothing[key] = req.body[key]; });
  await clothing.save();
  res.json({ clothing });
}

export async function removeClothing(req, res) {
  const clothing = await Clothing.findOne({ _id: req.params.id, userId: req.user._id });
  if (!clothing) return res.status(404).json({ message: "Clothing item not found." });
  await deleteImage(clothing.cloudinaryPublicId);
  await clothing.deleteOne();
  res.json({ message: "Clothing item deleted." });
}
