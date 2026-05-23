import { ArrowLeft, Trash2, ArrowRight } from "lucide-react";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";

const cartItems = [
  {
    id: 1,
    name: "Oversized Graphic Tee",
    price: 45,
    size: "M",
    color: "Black",
    quantity: 2,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80"
  },
  {
    id: 2,
    name: "Cargo Joggers",
    price: 85,
    size: "L",
    color: "Stone Gray",
    quantity: 1,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80"
  }
];

export function CartPage() {
  const navigate = useNavigate();
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="border-b border-white/10 px-5 md:px-12 py-5 flex items-center justify-between">
        <a href="#/shop" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
          <ArrowLeft size={18} />
          <span className="text-sm tracking-wide">Continue Shopping</span>
        </a>
        <a href="#/" className="tracking-[0.3em]" style={{ fontSize: "1.25rem", fontWeight: 800 }}>
          NVRLND
        </a>
        <div className="w-[140px]" /> {/* Spacer for centering */}
      </nav>

      {/* Cart */}
      <section className="py-12 px-5 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="tracking-tight mb-12" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}>
            Your Bag
          </h1>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-6 pb-6 border-b border-white/10">
                  <div className="w-32 h-40 bg-zinc-900 flex-shrink-0 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg mb-1" style={{ fontWeight: 700 }}>{item.name}</h3>
                        <p className="text-sm text-white/40">
                          {item.color} / {item.size}
                        </p>
                      </div>
                      <button className="text-white/40 hover:text-white transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center gap-4">
                        <button className="w-8 h-8 border border-white/20 hover:border-white/50 text-sm transition-colors">
                          -
                        </button>
                        <span className="text-sm w-8 text-center" style={{ fontWeight: 600 }}>{item.quantity}</span>
                        <button className="w-8 h-8 border border-white/20 hover:border-white/50 text-sm transition-colors">
                          +
                        </button>
                      </div>
                      <p className="text-lg" style={{ fontWeight: 700 }}>${item.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-zinc-950 border border-white/10 p-8 sticky top-24">
                <h3 className="text-xl mb-6" style={{ fontWeight: 900 }}>Order Summary</h3>

                <div className="space-y-4 mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Subtotal</span>
                    <span style={{ fontWeight: 600 }}>${subtotal}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Shipping</span>
                    <span style={{ fontWeight: 600 }}>
                      {shipping === 0 ? "FREE" : `$${shipping}`}
                    </span>
                  </div>
                  {subtotal < 100 && (
                    <div className="bg-white/5 border border-white/10 p-3 text-xs text-white/60">
                      Add ${100 - subtotal} more for free shipping
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-lg mb-8">
                  <span style={{ fontWeight: 700 }}>Total</span>
                  <span style={{ fontWeight: 900 }}>${total}</span>
                </div>

                <button 
                  onClick={() => navigate("/checkout")}
                  className="w-full bg-white text-black py-4 flex items-center justify-center gap-3 tracking-wider hover:bg-white/90 transition-colors mb-4"
                  style={{ fontWeight: 700, fontSize: "0.9rem" }}
                >
                  CHECKOUT
                  <ArrowRight size={18} />
                </button>

                <div className="space-y-2 text-xs text-white/40">
                  <p>• Secure checkout</p>
                  <p>• Free returns within 30 days</p>
                  <p>• Pay in 4 with Afterpay</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* You Might Like */}
      <section className="py-16 px-5 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl mb-8" style={{ fontWeight: 900 }}>You Might Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Utility Hoodie", price: 95, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
              { name: "Essential Crewneck", price: 55, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&q=80" },
              { name: "Oversized Bomber", price: 135, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
              { name: "Tech Cargo Pants", price: 95, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80" },
            ].map((product, i) => (
              <a key={i} href="#/product/1" className="group">
                <div className="aspect-[3/4] bg-zinc-900 mb-3 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="text-sm mb-1" style={{ fontWeight: 600 }}>{product.name}</h4>
                <p className="text-sm" style={{ fontWeight: 700 }}>${product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
