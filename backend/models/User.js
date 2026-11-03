import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, select: false },
  profileImage: { type: String, default: "" },
  preferences: {
    preferredStyles: { type: [String], default: [] },
    favoriteColors: { type: [String], default: [] }
  }
}, { timestamps: true });

export default mongoose.model("User", userSchema);
