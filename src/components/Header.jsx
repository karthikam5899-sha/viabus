import { Menu, X, UserRound, Ticket } from 'lucide-react'
import { useState } from 'react'
export default function Header({ go, page }) {
  const [open, setOpen] = useState(false)
  const nav = (target) => { go(target); setOpen(false) }
  return <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
    <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <button onClick={() => nav('home')} className="flex items-center gap-2.5" aria-label="ViaBus home"><img src="/ViaBus.png" alt="" className="h-12 w-12 object-contain"/><span className="text-xl font-extrabold tracking-tight text-slate-900">Via<span className="text-violet-700">Bus</span></span></button>
      <nav className="hidden items-center gap-8 md:flex"><button onClick={() => nav('home')} className={`text-sm font-semibold ${page==='home'?'text-teal-700':'text-slate-500 hover:text-slate-900'}`}>Home</button><button onClick={() => nav('search')} className="text-sm font-semibold text-slate-500 hover:text-slate-900">Find buses</button><button onClick={() => nav('support')} className={`text-sm font-semibold ${page==='support'?'text-teal-700':'text-slate-500 hover:text-slate-900'}`}>Help & support</button></nav>
      <div className="hidden items-center gap-3 md:flex"><button onClick={() => nav('confirmation')} className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"><Ticket size={17}/> My bookings</button><button onClick={() => nav('auth')} className="flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-teal-600/20 hover:bg-teal-700"><UserRound size={17}/> Sign in</button></div>
      <button className="rounded-xl p-2 text-slate-700 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
    </div>{open&&<div className="border-t border-slate-100 bg-white p-4 md:hidden"><div className="flex flex-col gap-1"><button onClick={()=>nav('home')} className="rounded-lg p-3 text-left">Home</button><button onClick={()=>nav('search')} className="rounded-lg p-3 text-left">Find buses</button><button onClick={()=>nav('support')} className="rounded-lg p-3 text-left">Help & support</button><button onClick={()=>nav('confirmation')} className="rounded-lg p-3 text-left">My bookings</button><button onClick={()=>nav('auth')} className="rounded-lg bg-teal-50 p-3 text-left font-bold text-teal-800">Sign in / Create account</button></div></div>}
  </header>
}
