import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const AuthContext = createContext(null);
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("stylemate_token");
    if (!token) { setLoading(false); return; }
    api.get("/auth/profile")
      .then(({ data }) => setUser(data.user))
      .catch(() => localStorage.removeItem("stylemate_token"))
      .finally(() => setLoading(false));
  }, []);

  const login = async (credentials) => {
    const { data } = await api.post("/auth/login", credentials);
    localStorage.setItem("stylemate_token", data.token);
    setUser(data.user);
  };
  const register = async (details) => {
    const { data } = await api.post("/auth/register", details);
    localStorage.setItem("stylemate_token", data.token);
    setUser(data.user);
  };
  const logout = () => {
    localStorage.removeItem("stylemate_token");
    setUser(null);
  };
  return <AuthContext.Provider value={{ user, loading, login, register, logout }}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);
