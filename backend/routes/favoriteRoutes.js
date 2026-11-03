import { Router } from "express";
import { listFavorites } from "../controllers/favoriteController.js";
import { protect } from "../middleware/authMiddleware.js";
import { asyncHandler } from "../utils/asyncHandler.js";
const router = Router();
router.use(protect);
router.get("/", asyncHandler(listFavorites));
export default router;
