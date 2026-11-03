import { askStyleMate } from "../services/assistantService.js";

export async function chat(req, res) {
  const message = String(req.body.message || "").trim();
  if (!message) return res.status(400).json({ message: "Please enter a message." });
  if (message.length > 1500) return res.status(400).json({ message: "Message is too long (maximum 1500 characters)." });
  const answer = await askStyleMate(req.user._id, message);
  res.json({ answer });
}
