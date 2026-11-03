import { useState } from "react";
import toast from "react-hot-toast";
import OutfitCard from "../../components/outfits/OutfitCard";
import { generateOutfits, toggleFavorite } from "../../services/outfitService";
import { getErrorMessage } from "../../services/api";
export default function OutfitGenerator(){
 const [occasion,setOccasion]=useState("College");const [outfits,setOutfits]=useState([]);const [busy,setBusy]=useState(false);
 const generate=async()=>{setBusy(true);try{const {data}=await generateOutfits(occasion);setOutfits(data.outfits);if(!data.outfits.length)toast("No suitable combinations returned. Add more wardrobe items.");}catch(e){toast.error(getErrorMessage(e));}finally{setBusy(false);}};
 const favorite=async id=>{try{const {data}=await toggleFavorite(id);setOutfits(old=>old.map(o=>o._id===id?{...o,isFavorite:data.outfit.isFavorite}:o));}catch(e){toast.error(getErrorMessage(e));}};
 return <div className="mx-auto max-w-6xl"><p className="text-sm text-stone-500">A little inspiration from what you already own</p><h1 className="mt-1 text-3xl font-semibold">AI outfit generator</h1><div className="mt-6 rounded-2xl border border-stone-200 bg-white p-5 md:p-7"><label className="block text-sm font-semibold">What's the occasion?</label><div className="mt-3 flex flex-wrap gap-2">{["College","Office","Casual outing","Party","Wedding","Date night","Traditional function"].map(x=><button key={x} onClick={()=>setOccasion(x)} className={`rounded-full border px-4 py-2 text-sm ${occasion===x?"border-rose-700 bg-rose-700 text-white":"border-stone-200 hover:border-rose-300"}`}>{x}</button>)}</div><button disabled={busy} onClick={generate} className="mt-5 rounded-xl bg-rose-700 px-5 py-3 text-sm font-medium text-white disabled:opacity-60">{busy?"Styling your looks...":"Generate outfit ideas ✨"}</button><p className="mt-2 text-xs text-stone-400">StyleMate will use items saved in your wardrobe.</p></div>
 {outfits.length>0&&<><h2 className="mt-8 text-xl font-semibold">Your outfit ideas</h2><div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{outfits.map(o=><OutfitCard key={o._id} outfit={o} onFavorite={favorite}/>)}</div></>}</div>;
}
