import cloudinary from "../config/cloudinary.js";
import { Readable } from "node:stream";

export function uploadImage(buffer, mimetype) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream({
      folder: "stylemate/wardrobe",
      resource_type: "image",
      allowed_formats: ["jpg", "jpeg", "png", "webp"]
    }, (error, result) => {
      if (error) return reject(error);
      resolve({ imageUrl: result.secure_url, publicId: result.public_id });
    });
    Readable.from(buffer).pipe(stream);
  });
}

export async function deleteImage(publicId) {
  if (publicId) await cloudinary.uploader.destroy(publicId, { resource_type: "image" });
}
