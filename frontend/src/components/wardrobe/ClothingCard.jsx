import { Pencil, Trash2 } from "lucide-react";
export default function ClothingCard({ item, onEdit, onDelete }) {
  return <article className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
    <div className="aspect-[4/5] bg-stone-100"><img src={item.imageUrl} alt={item.name} className="h-full w-full object-cover"/></div>
    <div className="p-3">
      <div className="flex items-start justify-between gap-2"><div className="min-w-0"><h3 className="truncate font-semibold">{item.name || item.subcategory || item.category}</h3><p className="text-sm text-stone-500">{[item.color, item.category].filter(Boolean).join(" · ")}</p></div>
      <div className="flex gap-1"><button onClick={() => onEdit(item)} className="rounded-lg p-1.5 text-stone-500 hover:bg-stone-100"><Pencil size={15}/></button><button onClick={() => onDelete(item._id)} className="rounded-lg p-1.5 text-rose-600 hover:bg-rose-50"><Trash2 size={15}/></button></div></div>
    </div>
  </article>;
}
