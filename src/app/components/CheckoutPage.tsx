import { ArrowLeft, ArrowRight, ShieldCheck, Lock } from "lucide-react";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";

export function CheckoutPage() {
  const navigate = useNavigate();
  const subtotal = 130; // Hardcoded for matching Cart
  const shipping = 0;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/success");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Nav */}
      <nav className="border-b border-white/10 px-5 md:px-12 py-5 flex items-center justify-between">
        <a href="#/cart" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
          <ArrowLeft size={18} />
          <span className="text-sm tracking-wide">Back to Cart</span>
        </a>
        <a href="#/" className="tracking-[0.3em]" style={{ fontSize: "1.25rem", fontWeight: 800 }}>
          NVRLND
        </a>
        <div className="flex items-center gap-2 text-white/40">
          <Lock size={16} />
          <span className="text-sm hidden md:inline tracking-wider">SECURE</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 py-12 px-5 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="tracking-tight mb-12" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}>
            Checkout
          </h1>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form Section */}
            <div className="lg:col-span-2 space-y-12">
              <form id="checkout-form" onSubmit={handleSubmit} className="space-y-10">
                {/* Shipping Details */}
                <section>
                  <h2 className="text-xl mb-6 flex items-center gap-3" style={{ fontWeight: 800 }}>
                    <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm">1</span>
                    Shipping Details
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <input required type="text" placeholder="First Name" className="bg-zinc-900 border border-white/10 px-4 py-3 text-sm focus:border-white outline-none transition-colors" />
                    <input required type="text" placeholder="Last Name" className="bg-zinc-900 border border-white/10 px-4 py-3 text-sm focus:border-white outline-none transition-colors" />
                    <input required type="email" placeholder="Email Address" className="col-span-2 bg-zinc-900 border border-white/10 px-4 py-3 text-sm focus:border-white outline-none transition-colors" />
                    <input required type="text" placeholder="Address" className="col-span-2 bg-zinc-900 border border-white/10 px-4 py-3 text-sm focus:border-white outline-none transition-colors" />
                    <input type="text" placeholder="Apartment, suite, etc. (optional)" className="col-span-2 bg-zinc-900 border border-white/10 px-4 py-3 text-sm focus:border-white outline-none transition-colors" />
                    <input required type="text" placeholder="City" className="bg-zinc-900 border border-white/10 px-4 py-3 text-sm focus:border-white outline-none transition-colors" />
                    <input required type="text" placeholder="Postal Code" className="bg-zinc-900 border border-white/10 px-4 py-3 text-sm focus:border-white outline-none transition-colors" />
                  </div>
                </section>

                {/* Payment Details */}
                <section>
                  <h2 className="text-xl mb-6 flex items-center gap-3" style={{ fontWeight: 800 }}>
                    <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm">2</span>
                    Payment
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <input required type="text" placeholder="Card Number" className="col-span-2 bg-zinc-900 border border-white/10 px-4 py-3 text-sm focus:border-white outline-none transition-colors" />
                    <input required type="text" placeholder="Name on Card" className="col-span-2 bg-zinc-900 border border-white/10 px-4 py-3 text-sm focus:border-white outline-none transition-colors" />
                    <input required type="text" placeholder="MM/YY" className="bg-zinc-900 border border-white/10 px-4 py-3 text-sm focus:border-white outline-none transition-colors" />
                    <input required type="text" placeholder="CVC" className="bg-zinc-900 border border-white/10 px-4 py-3 text-sm focus:border-white outline-none transition-colors" />
                  </div>
                </section>
              </form>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-zinc-950 border border-white/10 p-8 sticky top-24">
                <h3 className="text-xl mb-6" style={{ fontWeight: 900 }}>Order Summary</h3>
                
                <div className="space-y-4 mb-6 pb-6 border-b border-white/10">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/80">Oversized Graphic Tee</span>
                    <span>$90</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/80">Cargo Joggers</span>
                    <span>$40</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6 pb-6 border-b border-white/10 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Subtotal</span>
                    <span style={{ fontWeight: 600 }}>${subtotal}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Shipping</span>
                    <span style={{ fontWeight: 600 }}>{shipping === 0 ? "FREE" : `$${shipping}`}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-lg mb-8">
                  <span style={{ fontWeight: 700 }}>Total</span>
                  <span style={{ fontWeight: 900 }}>${total}</span>
                </div>

                <button 
                  type="submit" 
                  form="checkout-form"
                  className="w-full bg-white text-black py-4 flex items-center justify-center gap-3 tracking-wider hover:bg-white/90 transition-colors mb-4"
                  style={{ fontWeight: 700, fontSize: "0.9rem" }}
                >
                  PLACE ORDER
                  <ArrowRight size={18} />
                </button>

                <div className="flex items-center gap-2 justify-center text-xs text-white/40 mt-4">
                  <ShieldCheck size={14} />
                  <span>Secure 256-bit encryption</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
