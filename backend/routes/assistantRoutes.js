import { Router } from "express";
import { chat } from "../controllers/assistantController.js";
import { protect } from "../middleware/authMiddleware.js";
import { asyncHandler } from "../utils/asyncHandler.js";
const router = Router();
router.use(protect);
router.post("/chat", asyncHandler(chat));
export default router;
