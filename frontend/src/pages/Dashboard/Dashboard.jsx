import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Shirt, Sparkles, CalendarDays, Heart } from "lucide-react";
import api from "../../services/api";
import { useAuth } from "../../context/AuthContext";
export default function Dashboard(){
 const {user}=useAuth();const [counts,setCounts]=useState({clothes:0,outfits:0,favorites:0});
 useEffect(()=>{Promise.all([api.get("/wardrobe"),api.get("/outfits"),api.get("/favorites")]).then(([a,b,c])=>setCounts({clothes:a.data.clothing.length,outfits:b.data.outfits.length,favorites:c.data.outfits.length})).catch(()=>{});},[]);
 const stats=[[Shirt,"Wardrobe items",counts.clothes], [Sparkles,"Generated outfits",counts.outfits], [Heart,"Favorites",counts.favorites]];
 return <div className="mx-auto max-w-6xl"><p className="text-sm text-stone-500">Your personal style space</p><h1 className="mt-1 text-3xl font-semibold">Hello, {user?.name?.split(" ")[0]} ✨</h1><p className="mt-2 text-stone-500">Let's make getting dressed a little easier.</p>
 <div className="mt-8 grid gap-4 sm:grid-cols-3">{stats.map(([Icon,label,value])=><div key={label} className="rounded-2xl border border-stone-200 bg-white p-5"><Icon className="text-rose-700"/><p className="mt-4 text-sm text-stone-500">{label}</p><p className="mt-1 text-3xl font-semibold">{value}</p></div>)}</div>
 <div className="mt-8 rounded-3xl bg-[#efe1dc] p-7 md:p-10"><p className="text-sm font-semibold uppercase tracking-widest text-rose-800">Your next look</p><h2 className="mt-2 max-w-xl text-3xl font-semibold">Turn the clothes you own into outfits you love.</h2><p className="mt-3 max-w-xl text-stone-600">Add a few wardrobe pieces, then let StyleMate help you mix and match.</p><div className="mt-6 flex flex-wrap gap-3"><Link to="/wardrobe" className="rounded-xl bg-rose-700 px-5 py-3 text-sm font-medium text-white">Add clothes</Link><Link to="/generate" className="rounded-xl border border-rose-800/20 bg-white/70 px-5 py-3 text-sm font-medium text-rose-900">Generate an outfit</Link></div></div>
 <div className="mt-8 grid gap-4 md:grid-cols-2"><Quick to="/planner" icon={<CalendarDays/>} title="Plan your week" desc="Choose outfits for the days ahead."/><Quick to="/assistant" icon={<Sparkles/>} title="Ask your AI stylist" desc="Get styling ideas from your own wardrobe."/></div></div>;
}
function Quick({to,icon,title,desc}){return <Link to={to} className="flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-5 hover:border-rose-200"><span className="rounded-xl bg-rose-50 p-3 text-rose-700">{icon}</span><span><b>{title}</b><span className="mt-1 block text-sm text-stone-500">{desc}</span></span></Link>}
