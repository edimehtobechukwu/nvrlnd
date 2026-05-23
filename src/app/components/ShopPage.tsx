import { useState } from "react";
import { ArrowRight, ShoppingBag, Filter } from "lucide-react";
import { motion } from "motion/react";
import { Footer } from "./Footer";

const products = [
  {
    id: 1,
    name: "Oversized Graphic Tee",
    price: 45,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    category: "Tops",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Cargo Joggers",
    price: 85,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80",
    category: "Bottoms",
    badge: "Limited"
  },
  {
    id: 3,
    name: "Utility Hoodie",
    price: 95,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
    category: "Hoodies",
    badge: "New"
  },
  {
    id: 4,
    name: "Distressed Denim Jacket",
    price: 120,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
    category: "Outerwear",
    badge: null
  },
  {
    id: 5,
    name: "Relaxed Fit Sweatpants",
    price: 65,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80",
    category: "Bottoms",
    badge: "Best Seller"
  },
  {
    id: 6,
    name: "Essential Crewneck",
    price: 55,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
    category: "Tops",
    badge: null
  },
  {
    id: 7,
    name: "Oversized Bomber",
    price: 135,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
    category: "Outerwear",
    badge: "Limited"
  },
  {
    id: 8,
    name: "Tech Cargo Pants",
    price: 95,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
    category: "Bottoms",
    badge: "New"
  },
];

export function ShopPage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Tops", "Bottoms", "Hoodies", "Outerwear"];

  const filteredProducts = filter === "All"
    ? products
    : products.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="border-b border-white/10 px-5 md:px-12 py-5 flex items-center justify-between">
        <a href="#/" className="tracking-[0.3em]" style={{ fontSize: "1.25rem", fontWeight: 800 }}>
          NVRLND
        </a>
        <div className="flex items-center gap-6">
          <a href="#/cart" className="flex items-center gap-2">
            <ShoppingBag size={20} />
            <span className="text-sm">BAG (0)</span>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 md:py-24 px-5 md:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs tracking-[0.3em] text-white/40 mb-4">SPRING/SUMMER 2026</p>
            <h1 className="tracking-tight mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900, lineHeight: 1 }}>
              The Collection
            </h1>
            <p className="text-white/60 max-w-2xl text-lg mb-8">
              Streetwear essentials designed for those who never settle. Limited quantities. No restocks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-5 md:px-12 border-b border-white/10 sticky top-0 bg-black z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-4 overflow-x-auto">
            <Filter size={16} className="text-white/40 hidden md:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs tracking-wider transition-all whitespace-nowrap ${
                  filter === cat
                    ? "bg-white text-black"
                    : "bg-white/5 text-white/60 hover:bg-white/10"
                }`}
                style={{ fontWeight: 600 }}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
          <p className="text-xs text-white/40 hidden md:block">
            {filteredProducts.length} items
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-5 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.a
                key={product.id}
                href={`#/product/${product.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="relative aspect-[3/4] bg-zinc-900 mb-3 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-white text-black px-2 py-1 text-[10px] tracking-wider" style={{ fontWeight: 700 }}>
                      {product.badge.toUpperCase()}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <h3 className="text-sm tracking-wide mb-1" style={{ fontWeight: 600 }}>
                  {product.name}
                </h3>
                <p className="text-xs text-white/40">{product.category}</p>
                <p className="text-white mt-2" style={{ fontWeight: 700 }}>
                  ${product.price}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5 md:px-12 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="tracking-tight mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 900 }}>
            Not Sure Where to Start?
          </h2>
          <p className="text-white/60 mb-8">
            Check out our best sellers and customer favorites
          </p>
          <a
            href="#/"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 tracking-wider hover:bg-white/90 transition-colors"
            style={{ fontWeight: 700, fontSize: "0.9rem" }}
          >
            VIEW BEST SELLERS
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
