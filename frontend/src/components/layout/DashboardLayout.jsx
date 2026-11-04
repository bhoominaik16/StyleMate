import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Heart, LayoutDashboard, LogOut, MessageCircle, Shirt, Sparkles, CalendarDays, UserRound, WandSparkles } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const links = [
  ["/dashboard", "Overview", LayoutDashboard],
  ["/wardrobe", "My wardrobe", Shirt],
  ["/generate", "Outfit generator", Sparkles],
  ["/planner", "Weekly planner", CalendarDays],
  ["/favorites", "Favorites", Heart],
  ["/assistant", "AI stylist", MessageCircle],
  ["/profile", "Profile", UserRound]
];

export default function DashboardLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return <div className="min-h-screen bg-[#faf8f6] md:flex">
    <aside className="w-full border-b border-stone-200 bg-white p-4 md:sticky md:top-0 md:h-screen md:w-64 md:border-b-0 md:border-r">
      <button onClick={() => navigate("/dashboard")} className="mb-5 text-2xl font-bold tracking-tight text-rose-700">StyleMate<span className="text-stone-400">.</span></button>
      <nav className="flex gap-1 overflow-x-auto md:flex-col">
        {links.map(([to, label, Icon]) => <NavLink key={to} to={to} className={({isActive}) => `flex shrink-0 items-center gap-3 rounded-xl px-3 py-2.5 text-sm ${isActive ? "bg-rose-50 font-semibold text-rose-700" : "text-stone-600 hover:bg-stone-50"}`}>
          <Icon size={17}/>{label}
        </NavLink>)}
      </nav>
      <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4 md:absolute md:bottom-5 md:left-4 md:right-4">
        <div className="min-w-0"><p className="truncate text-sm font-semibold">{user?.name}</p><p className="truncate text-xs text-stone-500">{user?.email}</p></div>
        <button title="Log out" onClick={() => { logout(); navigate("/login"); }} className="rounded-lg p-2 text-stone-500 hover:bg-stone-100"><LogOut size={18}/></button>
      </div>
    </aside>
    <main className="min-w-0 flex-1 p-4 md:p-8"><Outlet/></main>
  </div>;
}
