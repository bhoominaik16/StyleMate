import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider, useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/common/ProtectedRoute";
import DashboardLayout from "./components/layout/DashboardLayout";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Wardrobe from "./pages/Wardrobe/Wardrobe";
import OutfitGenerator from "./pages/OutfitGenerator/OutfitGenerator";
import Occasion from "./pages/Occasion/Occasion";
import Planner from "./pages/Planner/Planner";
import Favorites from "./pages/Favorites/Favorites";
import Assistant from "./pages/Assistant/Assistant";
import Profile from "./pages/Profile/Profile";

function AppRoutes(){
 const {user}=useAuth();
 return <><Toaster position="top-right"/><Routes>
  <Route path="/" element={user?<Navigate to="/dashboard"/>:<Landing/>}/>
  <Route path="/login" element={user?<Navigate to="/dashboard"/>:<Login/>}/>
  <Route path="/register" element={user?<Navigate to="/dashboard"/>:<Register/>}/>
  <Route element={<ProtectedRoute/>}><Route element={<DashboardLayout/>}>
   <Route path="/dashboard" element={<Dashboard/>}/>
   <Route path="/wardrobe" element={<Wardrobe/>}/>
   <Route path="/generate" element={<OutfitGenerator/>}/>
   <Route path="/occasion" element={<Occasion/>}/>
   <Route path="/planner" element={<Planner/>}/>
   <Route path="/favorites" element={<Favorites/>}/>
   <Route path="/assistant" element={<Assistant/>}/>
   <Route path="/profile" element={<Profile/>}/>
  </Route></Route>
  <Route path="*" element={<Navigate to="/"/>}/>
 </Routes></>;
}
export default function App(){return <BrowserRouter><AuthProvider><AppRoutes/></AuthProvider></BrowserRouter>;}
