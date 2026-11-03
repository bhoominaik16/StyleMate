import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import { getErrorMessage } from "../../services/api";
import { AuthShell } from "./Login";
export default function Register(){
 const [form,setForm]=useState({name:"",email:"",password:""});const [busy,setBusy]=useState(false);const {register}=useAuth();const navigate=useNavigate();
 const submit=async e=>{e.preventDefault();setBusy(true);try{await register(form);navigate("/dashboard");toast.success("Your wardrobe journey starts now!");}catch(err){toast.error(getErrorMessage(err));}finally{setBusy(false);}};
 return <AuthShell title="Create your account" subtitle="Build your digital wardrobe with StyleMate."><form onSubmit={submit} className="space-y-4">{[["Name","name","text"],["Email","email","email"],["Password","password","password"]].map(([label,key,type])=><label key={key} className="block text-sm font-medium">{label}<input required minLength={key==="password"?8:undefined} type={type} value={form[key]} onChange={e=>setForm({...form,[key]:e.target.value})} className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-rose-400"/></label>)}<button disabled={busy} className="w-full rounded-xl bg-rose-700 py-3 font-medium text-white">{busy?"Creating account...":"Create account"}</button></form><p className="mt-5 text-center text-sm text-stone-500">Already registered? <Link className="font-semibold text-rose-700" to="/login">Log in</Link></p></AuthShell>;
}
