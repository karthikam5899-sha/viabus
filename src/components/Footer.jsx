import { BusFront, Instagram, Facebook, Twitter, ShieldCheck } from 'lucide-react'

const exploreLinks = [
  { id: 'popular-routes', label: 'Popular routes' },
  { id: 'bus-operators', label: 'Bus operators' },
  { id: 'travel-guide', label: 'Travel guide' }
]

export default function Footer({go,onExplore}) {
  return <footer className="mt-20 bg-[#102f38] text-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
      <div>
        <div className="mb-3 flex items-center gap-3 text-xl font-extrabold"><img src="/ViaBus.png" alt="" className="h-12 w-12 object-contain"/> ViaBus</div>
        <p className="max-w-xs text-sm leading-6 text-slate-300">Good journeys begin with a great booking. Find your seat and enjoy the ride.</p>
      </div>
      <div>
        <h3 className="mb-4 font-bold">Explore</h3>
        {exploreLinks.map(link=><button key={link.id} onClick={()=>onExplore(link.id)} className="mb-2 block text-left text-sm text-slate-300 hover:text-teal-300">{link.label}</button>)}
      </div>
      <div>
        <h3 className="mb-4 font-bold">Support</h3>
        <button onClick={()=>go('support')} className="mb-2 block text-sm text-slate-300 hover:text-teal-300">Help centre</button>
        <button onClick={()=>go('support')} className="mb-2 block text-sm text-slate-300 hover:text-teal-300">Cancellation policy</button>
        <button onClick={()=>go('support')} className="block text-sm text-slate-300 hover:text-teal-300">Contact us</button>
      </div>
      <div>
        <h3 className="mb-4 font-bold">Travel with peace of mind</h3>
        <div className="flex items-center gap-2 text-sm text-slate-300"><ShieldCheck size={19} className="text-teal-400"/> Secure booking experience</div>
        <div className="mt-5 flex gap-3">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram (opens in a new tab)" className="rounded-lg p-2 text-slate-300 hover:bg-white/10 hover:text-teal-300"><Instagram size={19}/></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook (opens in a new tab)" className="rounded-lg p-2 text-slate-300 hover:bg-white/10 hover:text-teal-300"><Facebook size={19}/></a>
          <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X (opens in a new tab)" className="rounded-lg p-2 text-slate-300 hover:bg-white/10 hover:text-teal-300"><Twitter size={19}/></a>
        </div>
      </div>
    </div>
    <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400">© 2026 ViaBus. Demo project — bookings are not processed for real.</div>
  </footer>
}
