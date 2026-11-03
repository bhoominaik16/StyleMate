import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import OutfitCard from "../../components/outfits/OutfitCard";
import { getFavorites, toggleFavorite } from "../../services/outfitService";
import { getErrorMessage } from "../../services/api";
export default function Favorites(){const [items,setItems]=useState([]);const load=()=>getFavorites().then(r=>setItems(r.data.outfits)).catch(e=>toast.error(getErrorMessage(e)));useEffect(()=>{load();},[]);const remove=async id=>{try{await toggleFavorite(id);load();}catch(e){toast.error(getErrorMessage(e));}};return <div className="mx-auto max-w-6xl"><h1 className="text-3xl font-semibold">Favorite outfits</h1><p className="mt-2 text-stone-500">Your saved looks, ready to wear again.</p>{items.length?<div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{items.map(o=><OutfitCard key={o._id} outfit={o} onFavorite={remove}/>)}</div>:<p className="mt-6 rounded-2xl bg-white p-10 text-center text-stone-500">No favorites yet. Save an outfit you love.</p>}</div>}
