import multer from "multer";

const allowed = ["image/jpeg", "image/png", "image/webp"];
export const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (!allowed.includes(file.mimetype)) return cb(new Error("Only JPG, PNG and WEBP images are supported."));
    cb(null, true);
  }
});
