import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, BadgeCheck, BookOpen, BusFront, CalendarDays, Check, CheckCircle2, ChevronRight, CircleHelp, Clock3, CreditCard, HeartHandshake, Mail, MapPin, Phone, ShieldCheck, Sparkles, Ticket, Users, WalletCards } from 'lucide-react'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchForm from './components/SearchForm'
import BusCard from './components/BusCard'
import SeatSelector from './components/SeatSelector'
import { buses, money } from './data'

const today = new Date(); const dateStr = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`
const initialTrip = { from: 'Chennai', to: 'Bengaluru', date: dateStr }
const demoCredentials = { email: 'demo@viabus.com', password: 'ViaBus123!' }
function Intro({onComplete}) {
 const [leaving,setLeaving]=useState(false)
 useEffect(()=>{
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const exitTimer=window.setTimeout(()=>setLeaving(true),reducedMotion?1200:5800)
  const completeTimer=window.setTimeout(onComplete,reducedMotion?1400:6300)
  return ()=>{window.clearTimeout(exitTimer);window.clearTimeout(completeTimer)}
 },[onComplete])
 return <div className={`intro-screen${leaving?' intro-screen-exit':''}`} role="dialog" aria-modal="true" aria-label="Welcome to ViaBus">
  <button type="button" onClick={onComplete} className="intro-skip">Skip intro</button>
  <div className="intro-brand">
   <img src="/ViaBus.png" alt="" className="intro-logo"/>
   <p className="intro-name">ViaBus</p>
   <p className="intro-tagline">Your journey starts here</p>
  </div>
  <div className="intro-road" aria-hidden="true"/>
  <svg className="intro-bus" viewBox="0 0 520 230" role="img" aria-label="A three-dimensional ViaBus coach with four spinning wheels driving across the screen">
   <defs>
    <linearGradient id="coach-side" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f8fafc"/><stop offset=".58" stopColor="#e2e8f0"/><stop offset="1" stopColor="#94a3b8"/></linearGradient>
    <linearGradient id="coach-front" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#dbeafe"/><stop offset="1" stopColor="#64748b"/></linearGradient>
    <linearGradient id="coach-glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#bae6fd"/><stop offset=".45" stopColor="#256579"/><stop offset="1" stopColor="#0f2938"/></linearGradient>
    <linearGradient id="coach-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#a78bfa"/><stop offset="1" stopColor="#6d28d9"/></linearGradient>
    <radialGradient id="coach-wheel"><stop offset="0" stopColor="#cbd5e1"/><stop offset=".35" stopColor="#64748b"/><stop offset=".37" stopColor="#17212b"/><stop offset="1" stopColor="#020617"/></radialGradient>
    <filter id="coach-headlight-glow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
   </defs>
   <ellipse cx="266" cy="205" rx="224" ry="16" fill="#020617" opacity=".42"/>
   <path d="M63 38Q67 24 87 24h291q16 0 28 12l48 49q10 10 10 25v52q0 12-14 17l-35 9H72q-17 0-17-18V56q0-11 8-18Z" fill="url(#coach-side)" stroke="#fff" strokeWidth="3"/>
   <path d="M407 38q8 3 14 10l43 44q9 9 9 20v43q0 12-12 18l-36 12V63q0-15-18-25Z" fill="url(#coach-front)" stroke="#cbd5e1" strokeWidth="2"/>
   <path d="M77 43q3-9 15-9h281q9 0 17 8l9 9H75Z" fill="#fff"/>
   <path d="M76 51h54v45H76zM137 51h55v45h-55zM199 51h55v45h-55zM261 51h55v45h-55zM323 51h54v45h-54z" fill="url(#coach-glass)" stroke="#94a3b8" strokeWidth="3"/>
   <path d="m386 53 14 3q10 2 10 12v29h-24Z" fill="url(#coach-glass)" stroke="#94a3b8" strokeWidth="3"/>
   <path d="M76 105h334v11H76z" fill="url(#coach-blue)"/>
   <path d="M76 118h332v34H76z" fill="#f8fafc"/>
   <path d="M80 124h58v20H80z" rx="3" fill="#dbeafe"/>
   <path d="M153 126h194" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round"/>
   <text x="207" y="145" fill="#5b21b6" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" letterSpacing="1">ViaBus</text>
   <path d="m413 112 47 4v31l-47 14Z" fill="#6d28d9"/>
   <path d="m416 59 27 8q8 3 8 11v29l-35-4Z" fill="url(#coach-glass)" stroke="#94a3b8" strokeWidth="3"/>
   <path className="intro-headlight-beam" d="m466 124 48-12v28l-48 1Z" fill="#fde68a"/>
   <path className="intro-headlight-beam intro-headlight-beam-lower" d="m465 143 42 4v20l-42-9Z" fill="#fde68a"/>
   <path className="intro-headlight" d="m461 126 11 2v11l-11 4Z" fill="#fff7c2" filter="url(#coach-headlight-glow)"/>
   <path className="intro-headlight intro-headlight-lower" d="m461 145 10 3v8l-10-2Z" fill="#fff7c2" filter="url(#coach-headlight-glow)"/>
   <path d="M68 163h389" stroke="#334155" strokeWidth="8" strokeLinecap="round"/>
   <g transform="translate(123 170)"><g className="intro-wheel"><circle r="23" fill="url(#coach-wheel)"/><circle r="8" fill="#cbd5e1"/><path d="M0-17v7m0 20v7m-17-17h7m20 0h7m-29-12 5 5m15 15 5 5m0-25-5 5m-15 15-5 5" stroke="#94a3b8" strokeWidth="3"/></g></g>
   <g transform="translate(169 170)"><g className="intro-wheel"><circle r="23" fill="url(#coach-wheel)"/><circle r="8" fill="#cbd5e1"/><path d="M0-17v7m0 20v7m-17-17h7m20 0h7m-29-12 5 5m15 15 5 5m0-25-5 5m-15 15-5 5" stroke="#94a3b8" strokeWidth="3"/></g></g>
   <g transform="translate(350 170)"><g className="intro-wheel"><circle r="23" fill="url(#coach-wheel)"/><circle r="8" fill="#cbd5e1"/><path d="M0-17v7m0 20v7m-17-17h7m20 0h7m-29-12 5 5m15 15 5 5m0-25-5 5m-15 15-5 5" stroke="#94a3b8" strokeWidth="3"/></g></g>
   <g transform="translate(396 170)"><g className="intro-wheel"><circle r="23" fill="url(#coach-wheel)"/><circle r="8" fill="#cbd5e1"/><path d="M0-17v7m0 20v7m-17-17h7m20 0h7m-29-12 5 5m15 15 5 5m0-25-5 5m-15 15-5 5" stroke="#94a3b8" strokeWidth="3"/></g></g>
   <path d="M43 178h18m415 0h17" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round"/>
  </svg>
 </div>
}
function SectionTitle({eyebrow,title,sub}){return <div className="mb-7"><p className="mb-2 text-xs font-extrabold uppercase tracking-[.18em] text-teal-700">{eyebrow}</p><h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>{sub&&<p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">{sub}</p>}</div>}
function Home({trip,setTrip,search}){return <main className="page-enter"><section className="relative overflow-hidden bg-[#103a42]"><div className="absolute inset-0 opacity-20" style={{backgroundImage:'radial-gradient(circle at 80% 20%, #5eead4 0, transparent 30%), radial-gradient(circle at 10% 100%, #0d9488 0, transparent 40%)'}}/><div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 pb-14 pt-12 sm:px-6 md:pb-24 md:pt-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-10 lg:px-8"><div className="text-white"><div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold text-teal-100"><Sparkles size={14}/> YOUR NEXT ADVENTURE STARTS HERE</div><h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">The journey is just as <span className="text-teal-300">beautiful</span> as the destination.</h1><p className="mt-5 max-w-lg text-base leading-7 text-slate-300">Find your perfect bus, pick your favourite seat, and travel with peace of mind.</p><div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-200"><span className="flex items-center gap-2"><ShieldCheck size={18} className="text-teal-300"/> Safe & secure</span><span className="flex items-center gap-2"><BadgeCheck size={18} className="text-teal-300"/> Trusted operators</span><span className="flex items-center gap-2"><HeartHandshake size={18} className="text-teal-300"/> Easy cancellations</span></div></div><div className="relative flex min-h-[240px] items-center justify-center sm:min-h-[320px] lg:min-h-[340px]"><div className="absolute h-56 w-56 rounded-full border border-white/10 sm:h-72 sm:w-72"/><div className="absolute h-40 w-40 rounded-full border border-white/10 sm:h-56 sm:w-56"/><div className="relative w-full max-w-md rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur"><img className="h-[210px] w-full rounded-[1.5rem] object-cover sm:h-[280px] lg:h-[300px]" src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=85" alt="A modern coach bus on a scenic road"/><div className="absolute -bottom-3 left-5 rounded-2xl bg-white p-3 text-slate-900 shadow-xl sm:-bottom-5 sm:-left-5 sm:p-4"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-50 text-teal-700"><Ticket/></span><div><p className="text-xs text-slate-500">Happy travellers</p><p className="font-extrabold">2M+ journeys</p></div></div></div></div></div></div></section><section className="relative z-10 mx-auto -mt-7 max-w-7xl px-4 sm:px-6 lg:px-8"><SearchForm trip={trip} setTrip={setTrip} onSearch={search}/></section><section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8"><SectionTitle eyebrow="Travel made simple" title="Why ride with ViaBus?" sub="Everything you need for a smoother journey, from finding the right bus to boarding with confidence."/><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[{icon:MapPin,title:'Routes you love',desc:'Compare operators and timings across popular destinations.'},{icon:ShieldCheck,title:'Secure booking',desc:'Your trip details are clear at every step of the journey.'},{icon:ArmchairIcon,title:'Your seat, your choice',desc:'Choose available seats with our simple seat map.'},{icon:WalletCards,title:'No surprises',desc:'See your fare breakdown before you confirm.'}].map((x,i)=><div key={x.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"><div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-teal-50 text-teal-700"><x.icon size={22}/></div><h3 className="font-extrabold text-slate-900">{x.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{x.desc}</p></div>)}</div></section><section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8"><SectionTitle eyebrow="Popular destinations" title="Where will you go next?" sub="A few favourite routes to get your travel plans rolling."/><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[{from:'Chennai',to:'Bengaluru',time:'8h 15m',img:'photo-1500530855697-b586d89ba3ee'},{from:'Coimbatore',to:'Chennai',time:'7h 30m',img:'photo-1501785888041-af3ef285b470'},{from:'Madurai',to:'Bengaluru',time:'9h 10m',img:'photo-1464822759023-fed622ff2c3b'},{from:'Kochi',to:'Chennai',time:'10h 20m',img:'photo-1470770841072-f978cf4d019e'}].map(r=><button key={r.from+r.to} onClick={()=>{setTrip(t=>({...t,from:r.from,to:r.to}));search(r.from,r.to)}} className="group overflow-hidden rounded-2xl bg-white text-left shadow-sm"><div className="relative h-36 overflow-hidden"><img src={`https://images.unsplash.com/${r.img}?auto=format&fit=crop&w=700&q=80`} alt={`${r.from} travel destination`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"/><p className="absolute bottom-3 left-4 text-sm font-bold text-white">{r.from} <span className="text-teal-200">→</span> {r.to}</p></div><div className="flex items-center justify-between p-4"><span className="text-xs text-slate-500">Typical journey · {r.time}</span><ChevronRight size={17} className="text-teal-700"/></div></button>)}</div></section><section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8"><div className="grid gap-5 rounded-3xl bg-teal-50 p-7 sm:grid-cols-3 sm:p-9">{[{n:'500+',label:'Routes to explore'},{n:'120+',label:'Trusted operators'},{n:'24/7',label:'Travel support'}].map(x=><div key={x.label} className="text-center"><p className="text-3xl font-extrabold text-teal-800">{x.n}</p><p className="mt-1 text-sm text-slate-600">{x.label}</p></div>)}</div></section></main>}
function ArmchairIcon(props){return <span className="text-2xl" {...props}>▣</span>}
function SearchPage({trip,setTrip,search,selectBus}){const [sort,setSort]=useState('recommended');const [onlySleeper,setOnlySleeper]=useState(false);const filtered=useMemo(()=>{let list=buses.filter(b=>!onlySleeper||b.type.toLowerCase().includes('sleeper'));if(sort==='price')list.sort((a,b)=>a.price-b.price);if(sort==='departure')list.sort((a,b)=>a.departure.localeCompare(b.departure));if(sort==='rating')list.sort((a,b)=>b.rating-a.rating);return list.map(b=>({...b,_from:trip.from,_to:trip.to}))},[sort,onlySleeper,trip.from,trip.to]);return <main className="page-enter mx-auto max-w-7xl px-4 py-9 sm:px-6 lg:px-8"><div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p className="mb-2 text-xs font-extrabold uppercase tracking-[.18em] text-teal-700">Find your ride</p><h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Buses from {trip.from} to {trip.to}</h1><p className="mt-2 text-sm text-slate-500">{new Date(`${trip.date}T12:00:00`).toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short',year:'numeric'})} · {filtered.length} buses found</p></div><button onClick={()=>search()} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 hover:border-teal-500"><ArrowLeft size={16}/> Edit search</button></div><div className="mb-7 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm"><SearchForm trip={trip} setTrip={setTrip} onSearch={search} compact/></div><div className="grid items-start gap-6 lg:grid-cols-[240px_1fr]"><aside className="rounded-2xl border border-slate-100 bg-white p-5"><h3 className="font-extrabold text-slate-900">Filter buses</h3><div className="my-5 border-t border-slate-100"/><label className="flex cursor-pointer items-center gap-3 text-sm font-medium text-slate-600"><input type="checkbox" checked={onlySleeper} onChange={e=>setOnlySleeper(e.target.checked)} className="h-4 w-4 accent-teal-600"/> AC sleeper only</label><div className="my-5 border-t border-slate-100"/><h4 className="mb-3 text-sm font-bold text-slate-800">Sort by</h4><div className="flex flex-col gap-2">{[{v:'recommended',l:'Recommended'},{v:'price',l:'Lowest price'},{v:'departure',l:'Departure time'},{v:'rating',l:'Top rated'}].map(o=><label key={o.v} className="flex cursor-pointer items-center gap-2 text-sm text-slate-600"><input type="radio" name="sort" value={o.v} checked={sort===o.v} onChange={()=>setSort(o.v)} className="accent-teal-600"/>{o.l}</label>)}</div><div className="mt-6 rounded-xl bg-teal-50 p-3 text-xs leading-5 text-teal-900"><ShieldCheck size={17} className="mb-2"/> Prices shown are demo data for this frontend project.</div></aside><div className="space-y-4">{filtered.length?filtered.map(bus=><BusCard key={bus.id} bus={bus} onSelect={selectBus}/>):<div className="rounded-2xl bg-white p-10 text-center"><p className="font-bold">No buses match this filter.</p><button onClick={()=>setOnlySleeper(false)} className="mt-3 text-sm font-bold text-teal-700">Clear filters</button></div>}</div></div></main>}
function Steps({step}){const items=['Bus & seats','Passenger details','Confirmation'];return <div className="mb-8 flex max-w-xl items-center">{items.map((x,i)=><div key={x} className="flex flex-1 items-center last:flex-none"><div className="flex items-center gap-2"><span className={`grid h-8 w-8 place-items-center rounded-full text-xs font-extrabold ${step>i?'bg-teal-600 text-white':step===i?'bg-teal-50 text-teal-800 ring-2 ring-teal-600':'bg-slate-100 text-slate-400'}`}>{step>i?<Check size={15}/>:i+1}</span><span className={`hidden text-xs font-bold sm:block ${step===i?'text-slate-900':'text-slate-400'}`}>{x}</span></div>{i<2&&<div className={`mx-3 h-px flex-1 ${step>i?'bg-teal-500':'bg-slate-200'}`}/>}</div>)}</div>}
function BookingPage({trip,bus,selected,setSelected,go,passenger,setPassenger,confirm}){const [error,setError]=useState('');const total=selected.length*bus.price;const next=()=>{if(!selected.length){setError('Please select at least one seat to continue.');return}setError('');go('passenger')};return <main className="page-enter mx-auto max-w-7xl px-4 py-9 sm:px-6 lg:px-8"><Steps step={0}/><div className="mb-8"><p className="mb-2 text-xs font-extrabold uppercase tracking-[.18em] text-teal-700">Your journey</p><h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Choose your seats</h1><p className="mt-2 text-sm text-slate-500">{trip.from} to {trip.to} · {new Date(`${trip.date}T12:00:00`).toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'})}</p></div><div className="grid items-start gap-6 lg:grid-cols-[1fr_340px]"><div className="space-y-5"><div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"><div className="flex flex-wrap items-center justify-between gap-4"><div><h2 className="font-extrabold text-slate-900">{bus.name}</h2><p className="mt-1 text-sm text-slate-500">{bus.type}</p></div><span className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-800">{bus.rating} ★ rated</span></div><div className="mt-5 flex items-center gap-4"><div><p className="text-xl font-extrabold">{bus.departure}</p><p className="text-xs text-slate-500">{trip.from}</p></div><div className="flex-1 text-center"><p className="mb-1 text-xs text-slate-400">{bus.duration}</p><div className="border-t border-dashed border-slate-300"/></div><div className="text-right"><p className="text-xl font-extrabold">{bus.arrival}</p><p className="text-xs text-slate-500">{trip.to}</p></div></div></div><SeatSelector selected={selected} setSelected={v=>{setSelected(v);setError('')}}/>{error&&<p role="alert" className="text-sm font-semibold text-rose-600">{error}</p>}</div><aside className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm lg:sticky lg:top-24"><h3 className="font-extrabold text-slate-900">Fare summary</h3><div className="my-4 border-t border-slate-100"/><div className="flex justify-between py-2 text-sm text-slate-500"><span>Seats ({selected.length})</span><span>{selected.length?selected.map(n=>`S${n}`).join(', '):'Not selected'}</span></div><div className="flex justify-between py-2 text-sm text-slate-500"><span>Ticket fare</span><span>{money(total)}</span></div><div className="flex justify-between py-2 text-sm text-slate-500"><span>Convenience fee</span><span>{money(selected.length?29:0)}</span></div><div className="my-3 border-t border-slate-100"/><div className="flex items-center justify-between"><span className="font-bold">Total amount</span><span className="text-2xl font-extrabold text-slate-900">{money(total+(selected.length?29:0))}</span></div><button onClick={next} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 py-3.5 text-sm font-extrabold text-white hover:bg-teal-700">Continue <ArrowRight size={17}/></button><p className="mt-3 flex items-center justify-center gap-1 text-center text-[11px] text-slate-400"><ShieldCheck size={13}/> Secure checkout · Demo only</p></aside></div></main>}
function PassengerPage({trip,bus,selected,passenger,setPassenger,go,confirm}) {
 const [error,setError]=useState('')
 const total=selected.length*bus.price+(selected.length?29:0)
 const update=(key,value)=>setPassenger(current=>({...current,[key]:value}))
 const submit=event=>{
  event.preventDefault()
  if(!passenger.name.trim()||!/^\S+@\S+\.\S+$/.test(passenger.email)||!/^[6-9]\d{9}$/.test(passenger.phone)){
   setError('Please enter a name, valid email, and 10-digit Indian mobile number.')
   return
  }
  setError('')
  confirm()
 }
 return <main className="page-enter mx-auto max-w-7xl px-4 py-9 sm:px-6 lg:px-8">
  <Steps step={1}/>
  <div className="mb-8">
   <p className="mb-2 text-xs font-extrabold uppercase tracking-[.18em] text-teal-700">Almost there</p>
   <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Passenger details</h1>
   <p className="mt-2 text-sm text-slate-500">Add the lead passenger's contact details for the booking.</p>
  </div>
  <div className="grid items-start gap-6 lg:grid-cols-[1fr_340px]">
   <form onSubmit={submit} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-7">
    <div className="mb-6 flex items-center gap-3">
     <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-50 text-teal-700"><Users/></span>
     <div>
      <h2 className="font-extrabold">Lead passenger</h2>
      <p className="text-xs text-slate-500">Seat{selected.length>1?'s':''} {selected.map(number=>`S${number}`).join(', ')}</p>
     </div>
    </div>
    <div className="grid gap-5 sm:grid-cols-2">
     <label className="sm:col-span-2">
      <span className="mb-2 block text-sm font-bold text-slate-700">Full name *</span>
      <input value={passenger.name} onChange={event=>update('name',event.target.value)} required placeholder="As on your ID proof" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"/>
     </label>
     <label>
      <span className="mb-2 block text-sm font-bold text-slate-700">Email address *</span>
      <input type="email" value={passenger.email} onChange={event=>update('email',event.target.value)} required placeholder="you@example.com" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"/>
     </label>
     <label>
      <span className="mb-2 block text-sm font-bold text-slate-700">Mobile number *</span>
      <div className="flex">
       <span className="rounded-l-xl border border-r-0 border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-500">+91</span>
       <input type="tel" inputMode="numeric" maxLength={10} value={passenger.phone} onChange={event=>update('phone',event.target.value.replace(/\D/g,''))} required placeholder="9876543210" className="min-w-0 flex-1 rounded-r-xl border border-slate-200 px-3 py-3 text-sm outline-none focus:border-teal-500"/>
      </div>
     </label>
    </div>
    {error&&<p role="alert" className="mt-4 text-sm font-semibold text-rose-600">{error}</p>}
    <div className="mt-6 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900"><CircleHelp size={17} className="mb-1 inline"/> Please ensure your contact details are correct. Ticket information will be shown on the confirmation screen.</div>
    <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
     <button type="button" onClick={()=>go('booking')} className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50">Back to seats</button>
     <button type="submit" className="flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-sm font-extrabold text-white hover:bg-teal-700">Confirm booking <ArrowRight size={17}/></button>
    </div>
   </form>
   <aside className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
    <h3 className="font-extrabold">Booking summary</h3>
    <p className="mt-1 text-xs text-slate-500">Review before you confirm</p>
    <div className="my-4 border-t border-slate-100"/>
    <p className="font-bold">{bus.name}</p>
    <p className="mt-1 text-sm text-slate-500">{trip.from} → {trip.to}</p>
    <p className="mt-1 text-sm text-slate-500">{new Date(`${trip.date}T12:00:00`).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})}</p>
    <div className="my-4 border-t border-slate-100"/>
    <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">Passenger details</h4>
    <p className="break-words text-sm font-semibold text-slate-800">{passenger.name.trim()||'Name not entered'}</p>
    <p className="mt-1 break-words text-sm text-slate-500">{passenger.email||'Email not entered'}</p>
    <p className="mt-1 text-sm text-slate-500">{passenger.phone?`+91 ${passenger.phone}`:'Mobile number not entered'}</p>
    <div className="my-4 border-t border-slate-100"/>
    <div className="flex justify-between py-2 text-sm text-slate-500"><span>Selected seats</span><span>{selected.map(number=>`S${number}`).join(', ')}</span></div>
    <div className="flex justify-between py-2 text-sm text-slate-500"><span>Base fare</span><span>{money(selected.length*bus.price)}</span></div>
    <div className="flex justify-between py-2 text-sm text-slate-500"><span>Convenience fee</span><span>{money(29)}</span></div>
    <div className="my-3 border-t border-slate-100"/>
    <div className="flex justify-between"><span className="font-bold">Total</span><span className="text-xl font-extrabold">{money(total)}</span></div>
    <div className="mt-5 flex gap-2 rounded-xl bg-slate-50 p-3 text-xs leading-5 text-slate-500"><ShieldCheck size={17} className="shrink-0 text-teal-600"/> This is a frontend demo. No payment will be collected.</div>
   </aside>
  </div>
 </main>
}
function Confirmation({trip,bus,selected,passenger,go,bookingId}){const total=selected.length*bus.price+(selected.length?29:0);return <main className="page-enter mx-auto max-w-3xl px-4 py-12 sm:px-6"><div className="mb-8 text-center"><span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-teal-50 text-teal-700"><CheckCircle2 size={43}/></span><p className="mt-5 text-xs font-extrabold uppercase tracking-[.18em] text-teal-700">You're all set</p><h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Booking confirmed!</h1><p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-500">Your demo ticket is ready. In a real app, the ticket and booking ID would also be sent to your email or phone.</p></div><div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft"><div className="flex flex-wrap items-center justify-between gap-3 bg-[#103a42] p-6 text-white"><div><div className="flex items-center gap-2 text-lg font-extrabold"><img src="/ViaBus.png" alt="" className="h-9 w-9 object-contain"/> ViaBus</div><p className="mt-2 text-xs text-teal-100">E-ticket · Bus journey</p></div><div className="text-right"><p className="text-xs text-slate-300">Booking ID</p><p className="mt-1 font-extrabold tracking-wider">{bookingId}</p></div></div><div className="p-6 sm:p-8"><div className="flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-xl bg-teal-50 font-extrabold text-teal-800">{bus.name[0]}</span><div><h2 className="font-extrabold text-slate-900">{bus.name}</h2><p className="mt-1 text-sm text-slate-500">{bus.type}</p></div></div><div className="my-7 grid grid-cols-[1fr_auto_1fr] items-center gap-3"><div><p className="text-2xl font-extrabold sm:text-3xl">{bus.departure}</p><p className="mt-1 font-bold text-slate-800">{trip.from}</p><p className="mt-1 text-xs text-slate-500">Departure</p></div><div className="flex flex-col items-center gap-2 text-xs text-slate-400"><Clock3 size={17}/>{bus.duration}<div className="w-16 border-t border-dashed border-slate-300 sm:w-24"/></div><div className="text-right"><p className="text-2xl font-extrabold sm:text-3xl">{bus.arrival}</p><p className="mt-1 font-bold text-slate-800">{trip.to}</p><p className="mt-1 text-xs text-slate-500">Arrival</p></div></div><div className="grid gap-4 rounded-2xl bg-slate-50 p-4 sm:grid-cols-2"><div><p className="text-xs text-slate-400">Journey date</p><p className="mt-1 text-sm font-bold">{new Date(`${trip.date}T12:00:00`).toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'long',year:'numeric'})}</p></div><div><p className="text-xs text-slate-400">Passenger</p><p className="mt-1 text-sm font-bold">{passenger.name}</p></div><div><p className="text-xs text-slate-400">Email</p><p className="mt-1 break-all text-sm font-bold">{passenger.email}</p></div><div><p className="text-xs text-slate-400">Mobile</p><p className="mt-1 text-sm font-bold">+91 {passenger.phone}</p></div></div><div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-slate-200 pt-5"><div><p className="text-xs text-slate-400">Seat number(s)</p><div className="mt-2 flex flex-wrap gap-2">{selected.map(n=><span key={n} className="rounded-lg bg-teal-50 px-3 py-1.5 text-sm font-extrabold text-teal-800">S{n}</span>)}</div></div><div className="text-right"><p className="text-xs text-slate-400">Total paid</p><p className="text-2xl font-extrabold text-slate-900">{money(total)}</p><p className="text-[10px] text-slate-400">Demo booking — not charged</p></div></div></div><div className="border-t border-slate-100 bg-slate-50 p-5 text-center"><p className="mb-4 text-xs text-slate-500">Keep your booking ID handy for reference.</p><button onClick={()=>go('home')} className="rounded-xl bg-teal-600 px-6 py-3 text-sm font-extrabold text-white hover:bg-teal-700">Back to home</button></div></div><p className="mt-5 text-center text-xs text-slate-400">This sample project does not reserve real seats or issue a valid travel ticket.</p></main>}
function SupportPage(){return <main className="page-enter mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
 <div className="mb-10 text-center">
  <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-teal-50 text-teal-700"><CircleHelp size={28}/></span>
  <p className="mt-5 text-xs font-extrabold uppercase tracking-[.18em] text-teal-700">We're here to help</p>
  <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Help &amp; Support</h1>
  <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">Find answers about booking, cancellations, and getting in touch.</p>
 </div>
 <div className="grid gap-5 md:grid-cols-3">
  <section id="help-centre" className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
   <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-50 text-teal-700"><CircleHelp/></span>
   <h2 className="mt-4 text-lg font-extrabold text-slate-900">Help centre</h2>
   <p className="mt-2 text-sm leading-6 text-slate-500">Quick answers to common trip questions.</p>
   <div className="mt-5 space-y-4">
    <details className="group border-t border-slate-100 pt-4">
     <summary className="cursor-pointer text-sm font-bold text-slate-700">How do I book a bus?</summary>
     <p className="mt-2 text-sm leading-6 text-slate-500">Choose your departure city, destination, and travel date. Select a bus and seats, enter passenger details, then review your booking summary.</p>
    </details>
    <details className="group border-t border-slate-100 pt-4">
     <summary className="cursor-pointer text-sm font-bold text-slate-700">Where can I find my ticket?</summary>
     <p className="mt-2 text-sm leading-6 text-slate-500">After you confirm this sample booking, the ticket details and booking ID appear on the confirmation page.</p>
    </details>
   </div>
  </section>
  <section id="cancellation-policy" className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
   <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-50 text-amber-700"><Clock3/></span>
   <h2 className="mt-4 text-lg font-extrabold text-slate-900">Cancellation policy</h2>
   <p className="mt-2 text-sm leading-6 text-slate-500">Cancellation windows, fees, and refunds vary by bus operator and ticket. Check the operator's terms before confirming a real booking.</p>
   <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">This is a frontend demo: it does not reserve seats, cancel tickets, or process refunds.</div>
  </section>
  <section id="contact-us" className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
   <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-700"><HeartHandshake/></span>
   <h2 className="mt-4 text-lg font-extrabold text-slate-900">Contact us</h2>
   <p className="mt-2 text-sm leading-6 text-slate-500">Need help with a real trip? Contact the bus operator listed on your ticket.</p>
   <div className="mt-5 space-y-3 rounded-xl bg-slate-50 p-4">
    <p className="flex items-center gap-3 text-sm text-slate-700"><Mail size={17} className="shrink-0 text-teal-700"/> support@viabus.demo</p>
    <p className="flex items-center gap-3 text-sm text-slate-700"><Phone size={17} className="shrink-0 text-teal-700"/> +91 00000 00000</p>
   </div>
   <p className="mt-3 text-xs leading-5 text-slate-400">Example contact details for this demo; these channels are not monitored.</p>
  </section>
 </div>
</main>}

function ExplorePage({onSearch}) {
 const routes=[
  {from:'Chennai',to:'Bengaluru',detail:'Overnight favourites · 8h 15m'},
  {from:'Coimbatore',to:'Chennai',detail:'A popular South India route · 7h 30m'},
  {from:'Madurai',to:'Bengaluru',detail:'Convenient overnight rides · 9h 10m'},
  {from:'Kochi',to:'Chennai',detail:'Coastal city connection · 10h 20m'}
 ]
 return <main className="page-enter mx-auto max-w-6xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
  <div className="text-center">
   <p className="text-xs font-extrabold uppercase tracking-[.18em] text-teal-700">Explore ViaBus</p>
   <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Plan your next journey</h1>
   <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">Discover favourite routes, compare sample operators, and get helpful tips for the road.</p>
  </div>
  <section id="popular-routes" className="scroll-mt-24 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
   <div className="mb-6 flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-50 text-teal-700"><MapPin/></span><div><h2 className="text-xl font-extrabold text-slate-900">Popular routes</h2><p className="mt-1 text-sm text-slate-500">Explore routes travellers love.</p></div></div>
   <div className="grid gap-3 sm:grid-cols-2">
    {routes.map(route=><button key={`${route.from}-${route.to}`} onClick={()=>onSearch(route.from,route.to)} className="flex items-center justify-between gap-4 rounded-xl border border-slate-100 p-4 text-left transition hover:border-teal-200 hover:bg-teal-50">
     <span><span className="block font-bold text-slate-900">{route.from} <span className="text-teal-700">→</span> {route.to}</span><span className="mt-1 block text-xs text-slate-500">{route.detail}</span></span><ChevronRight size={18} className="shrink-0 text-teal-700"/>
    </button>)}
   </div>
  </section>
  <section id="bus-operators" className="scroll-mt-24 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
   <div className="mb-6 flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-700"><BusFront/></span><div><h2 className="text-xl font-extrabold text-slate-900">Bus operators</h2><p className="mt-1 text-sm text-slate-500">Compare the sample operators available in this demo.</p></div></div>
   <div className="grid gap-3 sm:grid-cols-2">
    {buses.map(bus=><article key={bus.id} className="rounded-xl border border-slate-100 p-4">
     <div className="flex items-start justify-between gap-3"><div><h3 className="font-bold text-slate-900">{bus.name}</h3><p className="mt-1 text-sm text-slate-500">{bus.type}</p></div><span className="shrink-0 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700">★ {bus.rating}</span></div>
     <p className="mt-3 text-xs leading-5 text-slate-500">{bus.amenities.join(' · ')}</p>
    </article>)}
   </div>
   <p className="mt-4 text-xs text-slate-400">Operator information is sample content and does not represent live services.</p>
  </section>
  <section id="travel-guide" className="scroll-mt-24 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
   <div className="mb-6 flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-50 text-amber-700"><BookOpen/></span><div><h2 className="text-xl font-extrabold text-slate-900">Travel guide</h2><p className="mt-1 text-sm text-slate-500">A few simple tips for a smoother bus journey.</p></div></div>
   <div className="grid gap-4 sm:grid-cols-3">
    {[['Before you book','Double-check your route and journey date, then review the operator and cancellation terms.'],['Choose your seat','Pick a seat that suits your trip and confirm the seat numbers in your booking summary.'],['On travel day','Keep your ticket and valid photo ID handy, and arrive at the boarding point early.']].map(([title,description])=><article key={title} className="rounded-xl bg-slate-50 p-4"><h3 className="font-bold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{description}</p></article>)}
   </div>
  </section>
 </main>
}


function AuthPage({go,onSignIn}) {
 const [mode,setMode]=useState('login')
 const [email,setEmail]=useState('')
 const [password,setPassword]=useState('')
 const [message,setMessage]=useState(null)
 const useDemoAccount=()=>{setEmail(demoCredentials.email);setPassword(demoCredentials.password);setMessage(null)}
 const changeMode=next=>{setMode(next);setMessage(null)}
 const submit=event=>{
  event.preventDefault()
  if(mode==='signup'){
   setMessage({type:'info',text:'Account creation is a UI demo and is not connected to a backend.'})
   return
  }
  if(email.trim().toLowerCase()!==demoCredentials.email||password!==demoCredentials.password){
   setMessage({type:'error',text:'Those details do not match the demo account. Use the demo credentials shown above.'})
   return
  }
  onSignIn(email.trim())
 }
 return <main className="page-enter mx-auto grid max-w-5xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:items-center">
  <div className="rounded-3xl bg-[#103a42] p-8 text-white sm:p-10">
   <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-teal-300"><Ticket/></span>
   <h1 className="mt-7 text-3xl font-extrabold leading-tight">Your next journey is closer than you think.</h1>
   <p className="mt-4 text-sm leading-6 text-slate-300">Sign in to keep your trip details together and make planning your next ride a little easier.</p>
   <div className="mt-8 space-y-4 text-sm text-slate-200">
    <p className="flex items-center gap-3"><CheckCircle2 size={18} className="text-teal-300"/> Keep your bookings organised</p>
    <p className="flex items-center gap-3"><CheckCircle2 size={18} className="text-teal-300"/> Save passenger details</p>
    <p className="flex items-center gap-3"><CheckCircle2 size={18} className="text-teal-300"/> Find your next route faster</p>
   </div>
  </div>
  <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-soft sm:p-9">
   <div className="mb-7 flex rounded-xl bg-slate-100 p-1">
    <button type="button" onClick={()=>changeMode('login')} className={`flex-1 rounded-lg py-2.5 text-sm font-bold ${mode==='login'?'bg-white text-teal-800 shadow-sm':'text-slate-500'}`}>Sign in</button>
    <button type="button" onClick={()=>changeMode('signup')} className={`flex-1 rounded-lg py-2.5 text-sm font-bold ${mode==='signup'?'bg-white text-teal-800 shadow-sm':'text-slate-500'}`}>Create account</button>
   </div>
   <h2 className="text-2xl font-extrabold text-slate-900">{mode==='login'?'Welcome back':'Create your account'}</h2>
   <p className="mt-2 text-sm text-slate-500">{mode==='login'?'Enter your details to continue.':'A few details and you are ready to go.'}</p>
   {mode==='login'&&<div className="mt-5 rounded-xl border border-teal-100 bg-teal-50 p-4">
    <p className="text-xs font-extrabold uppercase tracking-wider text-teal-800">Demo sign-in</p>
    <p className="mt-2 text-sm text-slate-700"><span className="font-bold">Email:</span> {demoCredentials.email}</p>
    <p className="mt-1 text-sm text-slate-700"><span className="font-bold">Password:</span> {demoCredentials.password}</p>
    <button type="button" onClick={useDemoAccount} className="mt-3 text-sm font-bold text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-900">Use demo account</button>
   </div>}
   <form onSubmit={submit} className="mt-6 space-y-4">
    {mode==='signup'&&<label className="block"><span className="mb-2 block text-sm font-bold">Full name</span><input required placeholder="Your name" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-500"/></label>}
    <label className="block"><span className="mb-2 block text-sm font-bold">Email address</span><input required type="email" value={email} onChange={event=>setEmail(event.target.value)} placeholder="you@example.com" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-500"/></label>
    <label className="block"><span className="mb-2 block text-sm font-bold">Password</span><input required type="password" minLength={6} value={password} onChange={event=>setPassword(event.target.value)} placeholder="At least 6 characters" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-500"/></label>
    <button className="w-full rounded-xl bg-teal-600 py-3.5 text-sm font-extrabold text-white hover:bg-teal-700">{mode==='login'?'Sign in':'Create account'}</button>
   </form>
   {message&&<p role={message.type==='error'?'alert':'status'} className={`mt-4 rounded-xl p-3 text-sm font-semibold ${message.type==='error'?'bg-rose-50 text-rose-800':message.type==='success'?'bg-teal-50 text-teal-800':'bg-slate-50 text-slate-700'}`}>{message.text}</p>}
   <p className="mt-5 text-center text-xs text-slate-400">Demo sign-in is local only. No account or password is sent to a server.</p>
   <button onClick={()=>go('home')} className="mt-4 w-full text-sm font-bold text-slate-500 hover:text-teal-700">← Back to home</button>
  </div>
 </main>
}

function Dashboard({email,trip,bus,go,onSignOut}) {
 const journeyDate=new Date(`${trip.date}T12:00:00`).toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short',year:'numeric'})
 return <main className="page-enter mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
  <div className="mb-8 rounded-3xl bg-[#103a42] p-7 text-white sm:p-9">
   <p className="text-xs font-extrabold uppercase tracking-[.18em] text-teal-300">Demo account dashboard</p>
   <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Welcome, Demo Traveller</h1>
   <p className="mt-3 text-sm text-slate-300">Your ViaBus profile and travel information at a glance.</p>
  </div>
  <div className="grid items-start gap-6 lg:grid-cols-[.8fr_1.2fr]">
   <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
    <div className="mb-5 flex items-center gap-3">
     <span className="grid h-12 w-12 place-items-center rounded-full bg-teal-50 text-lg font-extrabold text-teal-700">D</span>
     <div><h2 className="font-extrabold text-slate-900">Profile details</h2><p className="text-xs text-slate-500">Demo user</p></div>
    </div>
    <dl className="space-y-4">
     <div><dt className="text-xs font-bold uppercase tracking-wider text-slate-400">Name</dt><dd className="mt-1 text-sm font-semibold text-slate-800">Demo Traveller</dd></div>
     <div><dt className="text-xs font-bold uppercase tracking-wider text-slate-400">Email</dt><dd className="mt-1 break-all text-sm font-semibold text-slate-800">{email}</dd></div>
     <div><dt className="text-xs font-bold uppercase tracking-wider text-slate-400">Account type</dt><dd className="mt-1 text-sm font-semibold text-slate-800">Demo account</dd></div>
    </dl>
    <button onClick={onSignOut} className="mt-6 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-600 hover:border-teal-500 hover:text-teal-700">Sign out</button>
   </section>
   <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
    <div className="flex flex-wrap items-start justify-between gap-3">
     <div><p className="text-xs font-extrabold uppercase tracking-wider text-teal-700">Travel overview</p><h2 className="mt-1 text-xl font-extrabold text-slate-900">Sample trip preview</h2></div>
     <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800">Demo only</span>
    </div>
    <div className="mt-5 rounded-xl bg-slate-50 p-5">
     <div className="flex flex-wrap items-center justify-between gap-4">
      <div><p className="text-xs text-slate-500">Route</p><p className="mt-1 text-lg font-extrabold text-slate-900">{trip.from} <span className="text-teal-700">→</span> {trip.to}</p></div>
      <div className="text-left sm:text-right"><p className="text-xs text-slate-500">Journey date</p><p className="mt-1 text-sm font-bold text-slate-800">{journeyDate}</p></div>
     </div>
     <div className="my-4 border-t border-slate-200"/>
     <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-teal-700"><BusFront/></span>
      <div><p className="font-bold text-slate-900">{bus.name}</p><p className="mt-1 text-xs text-slate-500">{bus.type} · {bus.departure} departure</p></div>
     </div>
    </div>
    <p className="mt-4 flex gap-2 text-xs leading-5 text-slate-500"><Ticket size={16} className="shrink-0 text-teal-700"/> This is example travel information, not a real booking. No seats are reserved and no ticket has been issued.</p>
    <button onClick={()=>go('search')} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-teal-700">Browse buses <ArrowRight size={17}/></button>
   </section>
  </div>
 </main>
}

export default function App(){
 const [introVisible,setIntroVisible]=useState(true)
 const [page,setPage]=useState('home')
 const [trip,setTrip]=useState(initialTrip)
 const [bus,setBus]=useState(buses[0])
 const [selected,setSelected]=useState([])
 const [passenger,setPassenger]=useState({name:'',email:'',phone:''})
 const [bookingId,setBookingId]=useState('RM284619')
 const [exploreTarget,setExploreTarget]=useState(null)
 const [userEmail,setUserEmail]=useState(null)
 const go=next=>{setPage(next);window.scrollTo({top:0,behavior:'smooth'})}
 const openExplore=target=>{setExploreTarget(target);setPage('explore');window.scrollTo({top:0,behavior:'smooth'})}
 useEffect(()=>{
  if(page!=='explore'||!exploreTarget)return
  document.getElementById(exploreTarget)?.scrollIntoView({behavior:'smooth',block:'start'})
  setExploreTarget(null)
 },[page,exploreTarget])
 const search=(from,to)=>{if(from&&to)setTrip(t=>({...t,from,to}));if((from&&to?from===to:trip.from===trip.to)){alert('Please choose two different cities.');return}go('search')}
 const selectBus=b=>{setBus(b);setSelected([]);go('booking')}
 const confirm=()=>{setBookingId(`RM${Math.floor(100000+Math.random()*900000)}`);go('confirmation')}
 return <>
  <div className="min-h-screen" aria-hidden={introVisible}>
  <Header go={go} page={page}/>
  {page==='home'&&<Home trip={trip} setTrip={setTrip} search={search}/>}
  {page==='search'&&<SearchPage trip={trip} setTrip={setTrip} search={search} selectBus={selectBus}/>}
  {page==='booking'&&<BookingPage trip={trip} bus={bus} selected={selected} setSelected={setSelected} go={go} passenger={passenger} setPassenger={setPassenger} confirm={confirm}/>}
  {page==='passenger'&&<PassengerPage trip={trip} bus={bus} selected={selected} passenger={passenger} setPassenger={setPassenger} go={go} confirm={confirm}/>}
  {page==='confirmation'&&<Confirmation trip={trip} bus={bus} selected={selected} passenger={passenger} go={go} bookingId={bookingId}/>}
  {page==='support'&&<SupportPage/>}
  {page==='explore'&&<ExplorePage onSearch={(from,to)=>{setTrip(current=>({...current,from,to}));search(from,to)}}/>}
  {page==='auth'&&<AuthPage go={go} onSignIn={email=>{setUserEmail(email);go('dashboard')}}/>}
  {page==='dashboard'&&userEmail&&<Dashboard email={userEmail} trip={trip} bus={bus} go={go} onSignOut={()=>{setUserEmail(null);go('home')}}/>}
  <Footer go={go} onExplore={openExplore}/>
  </div>
  {introVisible&&<Intro onComplete={()=>setIntroVisible(false)}/>}
 </>
}
