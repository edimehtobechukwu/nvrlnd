import { Footer } from "./Footer";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function FaqPage() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "Orders are processed within 1-2 business days. Standard domestic shipping takes 3-5 business days. International shipping takes 7-14 business days depending on the destination."
    },
    {
      question: "Do you accept returns or exchanges?",
      answer: "Yes. We offer free returns and exchanges within 30 days of delivery. Items must be unworn, unwashed, and have original tags attached."
    },
    {
      question: "How do your clothes fit?",
      answer: "Our collections are designed with an oversized, relaxed fit in mind. If you prefer a true-to-size look, we recommend ordering one size down. Check out our Size Guide for exact measurements."
    },
    {
      question: "When do new drops happen?",
      answer: "We drop new limited collections every Friday at 12 PM PST. Follow us on Instagram or join our mailing list to get early access notifications."
    },
    {
      question: "Do you restock sold out items?",
      answer: "Very rarely. We believe in keeping our collections limited and exclusive. Once a drop is gone, it's usually gone forever. Some core essentials are restocked seasonally."
    }
  ];

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
        <div className="max-w-3xl mx-auto">
          <h1 className="tracking-tight mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}>
            FAQ
          </h1>
          <p className="text-white/60 mb-12 text-lg">
            Everything you need to know about our products, shipping, and returns.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-zinc-950 border border-white/10 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-white/5"
                >
                  <span className="font-bold pr-4">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-white/40 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 pt-0 text-white/60 leading-relaxed border-t border-white/5 mt-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center border-t border-white/10 pt-12">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <button 
              onClick={() => navigate('/contact')}
              className="inline-flex bg-white text-black px-8 py-4 tracking-wider hover:bg-white/90 transition-colors"
              style={{ fontWeight: 700, fontSize: "0.9rem" }}
            >
              CONTACT US
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
