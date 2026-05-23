import { HashRouter, Routes, Route } from 'react-router-dom';
import { Hero } from "./components/Hero";
import { CredibilityStrip } from "./components/CredibilityStrip";
import { BestSellers } from "./components/BestSellers";
import { SocialProof } from "./components/SocialProof";
import { UrgencyCTA } from "./components/UrgencyCTA";
import { Footer } from "./components/Footer";
import { ShopPage } from "./components/ShopPage";
import { ProductPage } from "./components/ProductPage";
import { CartPage } from "./components/CartPage";
import { AboutPage } from "./components/AboutPage";
import { CheckoutPage } from "./components/CheckoutPage";
import { OrderSuccessPage } from "./components/OrderSuccessPage";
import { ScrollToTop } from "./components/ScrollToTop";
import { SizeGuidePage } from "./components/SizeGuidePage";
import { ContactPage } from "./components/ContactPage";
import { FaqPage } from "./components/FaqPage";

function HomePage() {
  return (
    <div className="min-h-screen bg-black" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
      <Hero />
      <CredibilityStrip />
      <BestSellers />
      <SocialProof />
      <UrgencyCTA />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<OrderSuccessPage />} />
        <Route path="/size-guide" element={<SizeGuidePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
    </HashRouter>
  );
}
