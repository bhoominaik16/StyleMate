import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";

export async function register(req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ message: "Name, email and password are required." });
  if (password.length < 8) return res.status(400).json({ message: "Password must be at least 8 characters." });
  const normalizedEmail = email.toLowerCase().trim();
  if (await User.findOne({ email: normalizedEmail })) return res.status(409).json({ message: "Email is already registered." });
  const user = await User.create({ name, email: normalizedEmail, password: await bcrypt.hash(password, 12) });
  res.status(201).json({ token: generateToken(user._id), user: { id: user._id, name: user.name, email: user.email } });
}

export async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email: String(email || "").toLowerCase().trim() }).select("+password");
  if (!user || !(await bcrypt.compare(password || "", user.password))) return res.status(401).json({ message: "Invalid email or password." });
  res.json({ token: generateToken(user._id), user: { id: user._id, name: user.name, email: user.email } });
}

export async function profile(req, res) {
  res.json({ user: req.user });
}

export async function updateProfile(req, res) {
  const { name, preferences } = req.body;
  if (name) req.user.name = name;
  if (preferences) req.user.preferences = { ...req.user.preferences.toObject(), ...preferences };
  await req.user.save();
  res.json({ user: req.user });
}
