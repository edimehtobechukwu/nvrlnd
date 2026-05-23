import { useState } from "react";
import { ArrowLeft, ShoppingBag, Star, Truck, Shield, Package } from "lucide-react";
import { motion } from "motion/react";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";

const product = {
  name: "Oversized Graphic Tee",
  price: 45,
  images: [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80",
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=1200&q=80",
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1200&q=80",
  ],
  description: "Premium oversized tee crafted from heavyweight cotton. Features bold graphic print and ribbed collar. Designed for maximum comfort and style.",
  features: [
    "100% heavyweight cotton",
    "Oversized relaxed fit",
    "Pre-shrunk fabric",
    "Screen-printed graphics",
    "Ribbed crew neck"
  ],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  colors: ["Black", "White", "Stone Gray"],
  reviews: {
    rating: 4.8,
    count: 342
  }
};

const reviews = [
  { name: "Jordan M.", rating: 5, text: "Best tee I've owned. Quality is insane and the fit is perfect." },
  { name: "Alex K.", rating: 5, text: "Super comfortable, gets compliments every time I wear it." },
  { name: "Sam P.", rating: 4, text: "Great quality but runs a bit large. Size down if you want fitted." }
];

export function ProductPage() {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="border-b border-white/10 px-5 md:px-12 py-5 flex items-center justify-between">
        <a href="#/shop" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
          <ArrowLeft size={18} />
          <span className="text-sm tracking-wide">Back to Shop</span>
        </a>
        <a href="#/" className="tracking-[0.3em]" style={{ fontSize: "1.25rem", fontWeight: 800 }}>
          NVRLND
        </a>
        <a href="#/cart" className="flex items-center gap-2">
          <ShoppingBag size={20} />
          <span className="text-sm">BAG (0)</span>
        </a>
      </nav>

      {/* Product */}
      <section className="py-12 px-5 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-[3/4] bg-zinc-900 mb-4 overflow-hidden"
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-[3/4] bg-zinc-900 overflow-hidden border-2 transition-all ${
                    selectedImage === i ? "border-white" : "border-transparent hover:border-white/30"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {Array(5).fill(null).map((_, i) => (
                    <Star key={i} size={14} className={i < Math.floor(product.reviews.rating) ? "fill-white" : "fill-white/20"} />
                  ))}
                </div>
                <span className="text-sm text-white/60">
                  {product.reviews.rating} ({product.reviews.count} reviews)
                </span>
              </div>

              <h1 className="tracking-tight mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.1 }}>
                {product.name}
              </h1>

              <p className="text-3xl" style={{ fontWeight: 800 }}>
                ${product.price}
              </p>
            </div>

            <p className="text-white/60 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Size */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm tracking-wider" style={{ fontWeight: 600 }}>SIZE</p>
                <a href="#/size-guide" className="text-xs text-white/40 hover:text-white underline">Size Guide</a>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-sm tracking-wider border transition-all ${
                      selectedSize === size
                        ? "bg-white text-black border-white"
                        : "bg-transparent text-white border-white/20 hover:border-white/50"
                    }`}
                    style={{ fontWeight: 600 }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color */}
            <div className="mb-8">
              <p className="text-sm tracking-wider mb-3" style={{ fontWeight: 600 }}>COLOR: {selectedColor}</p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 text-xs tracking-wider border transition-all ${
                      selectedColor === color
                        ? "bg-white text-black border-white"
                        : "bg-transparent text-white border-white/20 hover:border-white/50"
                    }`}
                    style={{ fontWeight: 600 }}
                  >
                    {color.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm tracking-wider mb-3" style={{ fontWeight: 600 }}>QUANTITY</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 border border-white/20 hover:border-white/50 transition-colors"
                >
                  -
                </button>
                <span className="text-lg w-12 text-center" style={{ fontWeight: 700 }}>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 border border-white/20 hover:border-white/50 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Bag */}
            <button 
              onClick={() => navigate("/cart")}
              className="w-full bg-white text-black py-5 flex items-center justify-center gap-3 tracking-wider hover:bg-white/90 transition-colors mb-4"
              style={{ fontWeight: 700, fontSize: "0.9rem" }}
            >
              <ShoppingBag size={18} />
              ADD TO BAG — ${product.price * quantity}
            </button>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
              <div className="flex flex-col items-center gap-2 text-center">
                <Truck size={20} className="text-white/60" />
                <p className="text-[10px] tracking-wider text-white/60">FREE SHIPPING</p>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <Shield size={20} className="text-white/60" />
                <p className="text-[10px] tracking-wider text-white/60">SECURE CHECKOUT</p>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <Package size={20} className="text-white/60" />
                <p className="text-[10px] tracking-wider text-white/60">EASY RETURNS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 px-5 md:px-12 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl mb-6" style={{ fontWeight: 900 }}>Features</h3>
            <ul className="space-y-3">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mt-2" />
                  <span className="text-white/60">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl mb-6" style={{ fontWeight: 900 }}>Care Instructions</h3>
            <ul className="space-y-3 text-white/60">
              <li>• Machine wash cold with like colors</li>
              <li>• Tumble dry low or hang to dry</li>
              <li>• Do not bleach</li>
              <li>• Iron on low heat if needed</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-5 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl mb-8" style={{ fontWeight: 900 }}>Customer Reviews</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="bg-zinc-950 p-6 border border-white/10">
                <div className="flex items-center gap-1 mb-3">
                  {Array(5).fill(null).map((_, j) => (
                    <Star key={j} size={12} className={j < review.rating ? "fill-white" : "fill-white/20"} />
                  ))}
                </div>
                <p className="text-white/60 mb-4 leading-relaxed">{review.text}</p>
                <p className="text-xs text-white/40 tracking-wider">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
