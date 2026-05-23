import { Footer } from "./Footer";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function SizeGuidePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Nav */}
      <nav className="border-b border-white/10 px-5 md:px-12 py-5 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
          <ArrowLeft size={18} />
          <span className="text-sm tracking-wide">Back</span>
        </button>
        <a href="#/" className="tracking-[0.3em]" style={{ fontSize: "1.25rem", fontWeight: 800 }}>
          NVRLND
        </a>
        <div className="w-[100px]" />
      </nav>

      {/* Main Content */}
      <main className="flex-1 py-16 px-5 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="tracking-tight mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}>
            Size Guide
          </h1>
          <p className="text-white/60 mb-12 text-lg max-w-2xl">
            Our garments feature an oversized, relaxed fit. If you prefer a more true-to-size fit, we recommend sizing down.
          </p>

          <div className="bg-zinc-950 border border-white/10 p-1 mb-12 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 text-xs tracking-wider text-white/40 font-semibold">SIZE</th>
                  <th className="p-4 text-xs tracking-wider text-white/40 font-semibold">CHEST (IN)</th>
                  <th className="p-4 text-xs tracking-wider text-white/40 font-semibold">LENGTH (IN)</th>
                  <th className="p-4 text-xs tracking-wider text-white/40 font-semibold">SLEEVE (IN)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold">XS</td>
                  <td className="p-4 text-white/80">34 - 36</td>
                  <td className="p-4 text-white/80">26.5</td>
                  <td className="p-4 text-white/80">32</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold">S</td>
                  <td className="p-4 text-white/80">36 - 38</td>
                  <td className="p-4 text-white/80">27.5</td>
                  <td className="p-4 text-white/80">33</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold">M</td>
                  <td className="p-4 text-white/80">38 - 40</td>
                  <td className="p-4 text-white/80">28.5</td>
                  <td className="p-4 text-white/80">34</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold">L</td>
                  <td className="p-4 text-white/80">40 - 42</td>
                  <td className="p-4 text-white/80">29.5</td>
                  <td className="p-4 text-white/80">35</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold">XL</td>
                  <td className="p-4 text-white/80">42 - 44</td>
                  <td className="p-4 text-white/80">30.5</td>
                  <td className="p-4 text-white/80">36</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold">XXL</td>
                  <td className="p-4 text-white/80">44 - 46</td>
                  <td className="p-4 text-white/80">31.5</td>
                  <td className="p-4 text-white/80">37</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-3">How to Measure</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                <strong>Chest:</strong> Measure under your arms, around the fullest part of your chest.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                <strong>Length:</strong> Measure from the highest point of the shoulder down to the hem.
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                <strong>Sleeve:</strong> Measure from the center back of your neck, across your shoulder and down to your wrist.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
