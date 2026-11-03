import { Heart } from "lucide-react";
export default function OutfitCard({ outfit, onFavorite }) {
  const items = outfit.clothingItems || [];
  return <article className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
    <div className="grid grid-cols-2 gap-1 bg-stone-100 p-1">
      {items.slice(0,4).map(item => <div key={item._id} className="aspect-square overflow-hidden rounded-lg bg-white"><img src={item.imageUrl} alt={item.name} className="h-full w-full object-cover"/></div>)}
      {!items.length && <div className="col-span-2 p-8 text-center text-sm text-stone-500">No wardrobe images available</div>}
    </div>
    <div className="p-4">
      <div className="flex items-center justify-between gap-2"><h3 className="font-semibold">{outfit.name}</h3><button onClick={() => onFavorite(outfit._id)} className={outfit.isFavorite ? "text-rose-600" : "text-stone-400"}><Heart size={19} fill={outfit.isFavorite ? "currentColor" : "none"}/></button></div>
      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-rose-700">{outfit.occasion}</p>
      <p className="mt-2 text-sm leading-6 text-stone-600">{outfit.explanation}</p>
      {outfit.stylingTips?.length > 0 && <ul className="mt-2 list-inside list-disc text-xs text-stone-500">{outfit.stylingTips.map((tip,i)=><li key={i}>{tip}</li>)}</ul>}
      <p className="mt-3 text-xs text-stone-400">{items.map(i=>i.name || i.category).join(" + ")}</p>
    </div>
  </article>;
}
