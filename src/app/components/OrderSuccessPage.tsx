import { CheckCircle, ArrowRight } from "lucide-react";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";

export function OrderSuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Nav */}
      <nav className="border-b border-white/10 px-5 md:px-12 py-5 flex items-center justify-center">
        <a href="#/" className="tracking-[0.3em]" style={{ fontSize: "1.25rem", fontWeight: 800 }}>
          NVRLND
        </a>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-24 px-5">
        <div className="max-w-lg w-full text-center">
          <div className="flex justify-center mb-8">
            <CheckCircle size={64} className="text-white" />
          </div>
          
          <h1 className="tracking-tight mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900 }}>
            Order Confirmed
          </h1>
          
          <p className="text-white/60 mb-10 text-lg">
            Thank you for your purchase. We've received your order and will send you an email with shipping updates soon.
          </p>

          <div className="bg-zinc-950 border border-white/10 p-6 mb-10 text-left">
            <p className="text-sm text-white/40 mb-1">Order Number</p>
            <p className="font-mono text-lg mb-4">#NVRLND-{Math.floor(100000 + Math.random() * 900000)}</p>
            
            <p className="text-sm text-white/40 mb-1">Estimated Delivery</p>
            <p className="text-lg">3-5 Business Days</p>
          </div>

          <button 
            onClick={() => navigate("/shop")}
            className="w-full bg-white text-black py-4 flex items-center justify-center gap-3 tracking-wider hover:bg-white/90 transition-colors"
            style={{ fontWeight: 700, fontSize: "0.9rem" }}
          >
            CONTINUE SHOPPING
            <ArrowRight size={18} />
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
