import { ArrowRight, Instagram } from "lucide-react";
import { motion } from "motion/react";
import { Footer } from "./Footer";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="border-b border-white/10 px-5 md:px-12 py-5 flex items-center justify-between">
        <a href="#/" className="tracking-[0.3em]" style={{ fontSize: "1.25rem", fontWeight: 800 }}>
          NVRLND
        </a>
        <div className="flex items-center gap-6">
          <a href="#/shop" className="text-sm tracking-wider text-white/60 hover:text-white transition-colors">
            SHOP
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-5 md:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea1c1d8f?w=1600&q=80"
            alt="Urban street"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.3em] text-white/40 mb-6">EST. 2024</p>
            <h1 className="tracking-tight mb-8" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: 900, lineHeight: 0.9 }}>
              NEVER
              <br />
              SETTLE
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              We're not just another streetwear brand. We're a movement for those who refuse to blend in.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-5 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] text-white/40 mb-4">OUR MISSION</p>
            <h2 className="tracking-tight mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900, lineHeight: 1.1 }}>
              Redefining Street Culture
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-6">
              NVRLND was born from the idea that clothing is more than fabric—it's self-expression. We create pieces for the bold, the different, the ones who write their own rules.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              Every drop is limited. Every design is intentional. We don't chase trends, we set them.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] bg-zinc-900 overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80"
              alt="Street culture"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-5 md:px-12 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] text-white/40 mb-4">WHAT WE STAND FOR</p>
            <h2 className="tracking-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}>
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                description: "No BS. No fake hype. Just real pieces made for real people who live for the culture."
              },
              {
                title: "Quality First",
                description: "We obsess over every stitch, every fabric choice, every detail. If it's not perfect, it doesn't ship."
              },
              {
                title: "Community Driven",
                description: "Built by the culture, for the culture. Your feedback shapes every drop we release."
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-black border border-white/10 p-8"
              >
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-black">{i + 1}</span>
                </div>
                <h3 className="text-2xl mb-4" style={{ fontWeight: 900 }}>
                  {value.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-5 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] text-white/40 mb-4">THE STORY</p>
            <h2 className="tracking-tight mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}>
              How We Started
            </h2>
          </div>

          <div className="space-y-8 text-lg text-white/70 leading-relaxed">
            <p>
              It started in a garage. Late nights, sketches scattered everywhere, and a simple question:
              <span className="text-white font-bold"> "Why does streetwear have to look like everyone else?"</span>
            </p>
            <p>
              We were tired of overpriced basics with recycled designs. Tired of brands that talked about culture but never lived it.
              So we built something different.
            </p>
            <p>
              NVRLND launched with 50 pieces. They sold out in 3 hours. Not because of some massive marketing budget or celebrity co-sign.
              Because people felt what we were building—<span className="text-white font-bold">something real</span>.
            </p>
            <p>
              Today, we're not chasing scale. We're building a community of people who don't settle for ordinary.
              Every drop is limited. Every piece tells a story. And we're just getting started.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-5 md:px-12 bg-zinc-950 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Community Members" },
              { number: "2024", label: "Founded" },
              { number: "100%", label: "Limited Drops" },
              { number: "4.9", label: "Avg Rating" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-5xl md:text-6xl mb-2" style={{ fontWeight: 900 }}>
                  {stat.number}
                </p>
                <p className="text-xs tracking-wider text-white/40 uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-24 px-5 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] text-white/40 mb-4">JOIN THE MOVEMENT</p>
            <h2 className="tracking-tight mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}>
              Built By The Culture
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Follow us on Instagram for drops, behind-the-scenes, and to connect with the community
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
              "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80",
              "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80",
              "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80"
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square bg-zinc-900 overflow-hidden group cursor-pointer"
              >
                <img
                  src={img}
                  alt="Community"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 tracking-wider hover:bg-white/90 transition-colors"
              style={{ fontWeight: 700, fontSize: "0.9rem" }}
            >
              <Instagram size={18} />
              FOLLOW @NVRLND
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-5 md:px-12 bg-white text-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="tracking-tight mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 900 }}>
            Ready to Never Settle?
          </h2>
          <p className="text-xl text-black/60 mb-10">
            Join 50,000+ who've already made the move. Limited drops. No restocks.
          </p>
          <a
            href="#/shop"
            className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 tracking-wider hover:bg-black/90 transition-colors"
            style={{ fontWeight: 700, fontSize: "0.9rem" }}
          >
            SHOP THE COLLECTION
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
