import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import authRoutes from "./routes/authRoutes.js";
import wardrobeRoutes from "./routes/wardrobeRoutes.js";
import outfitRoutes from "./routes/outfitRoutes.js";
import plannerRoutes from "./routes/plannerRoutes.js";
import favoriteRoutes from "./routes/favoriteRoutes.js";
import assistantRoutes from "./routes/assistantRoutes.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

// Security middleware
app.use(helmet());

// CORS configuration
const allowedOrigins = [
  "http://localhost:5173",
  ...(process.env.CLIENT_URL || "")
    .split(",")
    .map(url => url.trim())
    .filter(Boolean)
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

// Request body parsing
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

// API rate limiting
app.use(
  "/api",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 180,
    standardHeaders: true,
    legacyHeaders: false
  })
);

// Health check
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    app: "StyleMate API"
  });
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/wardrobe", wardrobeRoutes);
app.use("/api/outfits", outfitRoutes);
app.use("/api/planner", plannerRoutes);
app.use("/api/favorites", favoriteRoutes);
app.use("/api/assistant", assistantRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

export default app;