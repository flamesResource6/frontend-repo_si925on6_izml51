import { useRef } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function App() {
  const rsvpRef = useRef(null)

  const scrollToRSVP = () => {
    rsvpRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-zinc-200 scroll-smooth">
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-[0.3em] uppercase text-sm text-zinc-200 hover:text-white transition">
            <span className="bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 bg-clip-text text-transparent">The Wedding</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="#story" className="hover:text-white transition">Story</a>
            <a href="#details" className="hover:text-white transition">Details</a>
            <a href="#gallery" className="hover:text-white transition">Gallery</a>
            <button onClick={scrollToRSVP} className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-300 to-yellow-400 text-black font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.15)_inset] hover:brightness-110 transition">
              RSVP
            </button>
          </nav>
        </div>
      </header>

      {/* Hero with Spline Cover */}
      <section className="relative min-h-[92vh] w-full overflow-hidden" aria-label="Hero">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/EQgEIs2r5cMbWroZ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Subtle gradient overlays for readability (won't block interaction) */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.45)_65%,rgba(0,0,0,0.75)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />

        <div className="relative z-20 max-w-6xl mx-auto px-6 pt-40 pb-28 md:pt-48 md:pb-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="tracking-[0.35em] uppercase text-[11px] md:text-xs text-zinc-300/90 mb-4">A celebration of love</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
              <span className="bg-gradient-to-r from-zinc-100 via-white to-zinc-200 bg-clip-text text-transparent">Amelia</span>
              <span className="mx-4 text-zinc-400/60">&</span>
              <span className="bg-gradient-to-r from-zinc-100 via-white to-zinc-200 bg-clip-text text-transparent">Sebastian</span>
            </h1>
            <div className="mt-6 text-zinc-300/90">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
                <span className="tracking-widest text-xs uppercase">September 21, 2025 · Lake Como, Italy</span>
                <span className="h-px w-8 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
              </div>
            </div>
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                onClick={scrollToRSVP}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 text-black font-medium shadow-[0_1px_0_0_rgba(255,255,255,0.35)_inset,0_10px_25px_-10px_rgba(234,179,8,0.75)] hover:brightness-110 transition"
              >
                Reserve your seat
              </button>
              <a href="#details" className="px-6 py-3 rounded-full border border-white/20 hover:border-white/40 text-zinc-200 hover:text-white transition">
                Event details
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="flex flex-col md:flex-row items-start gap-12">
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">Our Story</span>
                </h2>
                <p className="text-zinc-300 leading-relaxed">
                  It began with a chance encounter and grew into a partnership of adventure, laughter, and quiet moments. From late-night walks to faraway shores, every step has brought us closer to this day—where we promise a lifetime of love and devotion.
                </p>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="aspect-[4/5] rounded-xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 shadow-2xl shadow-black/40" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Details */}
      <section id="details" className="relative py-24">
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl md:text-3xl font-semibold mb-10">
            <span className="bg-gradient-to-r from-zinc-200 to-white bg-clip-text text-transparent">The Details</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[{
              title: 'Ceremony',
              body: 'Villa del Lago Gardens · 3:00 PM',
            }, {
              title: 'Reception',
              body: 'The Glass Pavilion · 6:30 PM',
            }, {
              title: 'Attire',
              body: 'Black tie preferred. Please embrace a dark, elegant palette.',
            }].map((card, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-950 to-black p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset]">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="h-[10px] w-[10px] rounded-full bg-gradient-to-tr from-amber-300 to-amber-500 shadow-[0_0_20px_rgba(245,197,24,0.6)]" />
                  <span className="tracking-widest uppercase text-[11px] text-zinc-400">{card.title}</span>
                </div>
                <p className="text-zinc-200">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="relative py-24">
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl md:text-3xl font-semibold mb-10">
            <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">Gallery</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="group aspect-square rounded-xl relative overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_center,rgba(255,200,80,0.18),transparent_60%)]" />
                <div className="absolute inset-x-3 bottom-3 text-[11px] tracking-widest uppercase text-zinc-400">Coming soon</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section ref={rsvpRef} id="rsvp" className="relative py-24">
        <div className="relative max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-950 to-black p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset]">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">
              <span className="bg-gradient-to-r from-zinc-200 to-white bg-clip-text text-transparent">Kindly Respond</span>
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('Thank you for your RSVP. We look forward to celebrating together!')
              }}
              className="grid md:grid-cols-2 gap-4"
            >
              <div className="md:col-span-1">
                <label className="block text-xs tracking-widest uppercase text-zinc-400 mb-2">First name</label>
                <input required className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-400/60" placeholder="Amelia" />
              </div>
              <div className="md:col-span-1">
                <label className="block text-xs tracking-widest uppercase text-zinc-400 mb-2">Last name</label>
                <input required className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-400/60" placeholder="Stone" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs tracking-widest uppercase text-zinc-400 mb-2">Email</label>
                <input type="email" required className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-400/60" placeholder="you@example.com" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs tracking-widest uppercase text-zinc-400 mb-2">Message</label>
                <textarea rows={4} className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-400/60" placeholder="Dietary notes, song requests, or a warm wish" />
              </div>
              <div className="md:col-span-2 flex items-center justify-between pt-2">
                <p className="text-xs text-zinc-400">We’ll confirm your RSVP by email.</p>
                <button type="submit" className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 text-black font-medium shadow-[0_1px_0_0_rgba(255,255,255,0.35)_inset,0_10px_25px_-10px_rgba(234,179,8,0.75)] hover:brightness-110 transition">
                  Send RSVP
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-zinc-400 text-sm">© {new Date().getFullYear()} Amelia & Sebastian</div>
          <div className="text-zinc-400 text-sm">
            Crafted with care · <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">A&S</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
