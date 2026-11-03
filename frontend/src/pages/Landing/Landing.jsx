import { Link } from "react-router-dom";
import { Sparkles, Shirt, CalendarDays } from "lucide-react";
export default function Landing() {
  return <div className="min-h-screen bg-[#faf8f6]">
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6"><span className="text-2xl font-bold text-rose-700">StyleMate.</span><div className="flex gap-3"><Link className="rounded-xl px-4 py-2 text-sm" to="/login">Log in</Link><Link className="rounded-xl bg-rose-700 px-4 py-2 text-sm text-white" to="/register">Get started</Link></div></header>
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
      <div><p className="mb-4 text-sm font-semibold uppercase tracking-[.2em] text-rose-700">Your wardrobe, smarter</p><h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-6xl">Less time deciding. <span className="text-rose-700">More time styling.</span></h1><p className="mt-6 max-w-lg leading-7 text-stone-600">Organize your clothes, discover fresh combinations and plan your week with your personal AI stylist.</p><Link to="/register" className="mt-8 inline-flex rounded-xl bg-rose-700 px-6 py-3 font-medium text-white shadow-sm hover:bg-rose-800">Create your wardrobe <span className="ml-2">→</span></Link></div>
      <div className="rounded-[2rem] bg-[#eadbd5] p-5"><div className="grid grid-cols-2 gap-3"><div className="aspect-[3/4] overflow-hidden rounded-2xl bg-white"><img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700" alt="Fashion inspiration"/></div><div className="mt-8 aspect-[3/4] overflow-hidden rounded-2xl bg-white"><img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=700" alt="Wardrobe inspiration"/></div></div></div>
    </section>
    <section className="mx-auto grid max-w-6xl gap-4 px-6 pb-20 md:grid-cols-3">
      {[[Shirt,"Digital wardrobe","Keep your clothing collection organized."],[Sparkles,"AI outfit ideas","Get suggestions based on clothes you own."],[CalendarDays,"Weekly planner","Plan outfits ahead and simplify your mornings."]].map(([Icon,title,desc])=><div key={title} className="rounded-2xl border border-stone-200 bg-white p-6"><Icon className="mb-4 text-rose-700"/><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-stone-500">{desc}</p></div>)}
    </section>
  </div>;
}
