import api from "./api";
export const getClothes = () => api.get("/wardrobe");
export const analyzeClothing = (form) => api.post("/wardrobe/analyze", form);
export const addClothing = (form) => api.post("/wardrobe", form);
export const updateClothing = (id, data) => api.put(`/wardrobe/${id}`, data);
export const deleteClothing = (id) => api.delete(`/wardrobe/${id}`);
