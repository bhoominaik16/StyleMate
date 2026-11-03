import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import { getErrorMessage } from "../../services/api";
export default function Login() {
  const [form,setForm] = useState({email:"",password:""});
  const [busy,setBusy] = useState(false);
  const {login} = useAuth(); const navigate=useNavigate();
  const submit=async e=>{e.preventDefault();setBusy(true);try{await login(form);navigate("/dashboard");toast.success("Welcome back!");}catch(err){toast.error(getErrorMessage(err));}finally{setBusy(false);}};
  return <AuthShell title="Welcome back" subtitle="Log in to your StyleMate wardrobe."><form onSubmit={submit} className="space-y-4"><Field label="Email" type="email" value={form.email} onChange={v=>setForm({...form,email:v})}/><Field label="Password" type="password" value={form.password} onChange={v=>setForm({...form,password:v})}/><button disabled={busy} className="w-full rounded-xl bg-rose-700 py-3 font-medium text-white disabled:opacity-60">{busy?"Logging in...":"Log in"}</button></form><p className="mt-5 text-center text-sm text-stone-500">New to StyleMate? <Link className="font-semibold text-rose-700" to="/register">Create account</Link></p></AuthShell>;
}
export function AuthShell({children,title,subtitle}){return <div className="flex min-h-screen items-center justify-center bg-[#faf8f6] p-4"><div className="w-full max-w-md rounded-3xl border border-stone-200 bg-white p-8 shadow-sm"><Link to="/" className="text-xl font-bold text-rose-700">StyleMate.</Link><h1 className="mt-8 text-3xl font-semibold">{title}</h1><p className="mt-2 mb-7 text-sm text-stone-500">{subtitle}</p>{children}</div></div>}
function Field({label,type="text",value,onChange}){return <label className="block text-sm font-medium">{label}<input required type={type} value={value} onChange={e=>onChange(e.target.value)} className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-rose-400"/></label>}
