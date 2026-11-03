import api from "./api";
export const generateOutfits = (occasion) => api.post("/outfits/generate", { occasion });
export const getOutfits = () => api.get("/outfits");
export const toggleFavorite = (id) => api.post(`/outfits/${id}/favorite`);
export const getFavorites = () => api.get("/favorites");
