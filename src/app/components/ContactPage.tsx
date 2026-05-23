import { useState } from "react";
import { Footer } from "./Footer";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

type ContactData = {
  category: string;
  name: string;
  email: string;
  orderNumber: string;
  message: string;
};

export function ContactPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<ContactData>({
    category: "",
    name: "",
    email: "",
    orderNumber: "",
    message: ""
  });

  const categories = [
    "Order Support",
    "Returns & Exchanges",
    "Product Question",
    "Press & Collaborations",
    "Other"
  ];

  const updateData = (fields: Partial<ContactData>) => {
    setData(prev => ({ ...prev, ...fields }));
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = () => {
    // Submit logic here
    nextStep();
  };

  // Determine if current step is valid to proceed
  const canProceed = () => {
    if (step === 0) return data.category !== "";
    if (step === 1) return data.name.trim() !== "" && data.email.includes("@");
    if (step === 2) {
      if (["Order Support", "Returns & Exchanges"].includes(data.category)) {
        return data.orderNumber.trim() !== "";
      }
      return true; // Skip validation if order number isn't strictly required, though we might skip step 2 entirely
    }
    if (step === 3) return data.message.trim() !== "";
    return true;
  };

  // Skip order number step if not relevant
  const handleNextFromContactInfo = () => {
    if (["Order Support", "Returns & Exchanges"].includes(data.category)) {
      setStep(2);
    } else {
      setStep(3);
    }
  };

  const handlePrevFromMessage = () => {
    if (["Order Support", "Returns & Exchanges"].includes(data.category)) {
      setStep(2);
    } else {
      setStep(1);
    }
  };

  const totalSteps = 4; // 0, 1, 2, 3 (4 is success)
  const progress = Math.min(100, (step / (totalSteps - 1)) * 100);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Nav */}
      <nav className="border-b border-white/10 px-5 md:px-12 py-5 flex items-center justify-between z-10 relative bg-black">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
          <ArrowLeft size={18} />
          <span className="text-sm tracking-wide">Back</span>
        </button>
        <a href="#/" className="tracking-[0.3em]" style={{ fontSize: "1.25rem", fontWeight: 800 }}>
          NVRLND
        </a>
        <div className="w-[100px]" />
      </nav>

      {/* Progress Bar */}
      {step < 4 && (
        <div className="w-full h-1 bg-zinc-900">
          <motion.div 
            className="h-full bg-white" 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}

      {/* Main Content - Interactive Form */}
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-5 overflow-hidden relative">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div 
              key="step0"
              initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-xl"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">What can we help you with?</h2>
              <div className="space-y-3">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => {
                      updateData({ category: cat });
                      setTimeout(nextStep, 300);
                    }}
                    className={`w-full p-5 text-left border transition-all text-lg ${
                      data.category === cat 
                        ? "bg-white text-black border-white" 
                        : "bg-zinc-950 border-white/10 hover:border-white/50 text-white/80"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-xl"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Let's get your details.</h2>
              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-xs tracking-wider text-white/60 mb-2 font-bold">FULL NAME</label>
                  <input 
                    type="text" 
                    autoFocus
                    value={data.name}
                    onChange={e => updateData({ name: e.target.value })}
                    className="w-full bg-zinc-950 border border-white/20 px-5 py-4 text-lg focus:border-white outline-none transition-colors" 
                    placeholder="Jane Doe" 
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-wider text-white/60 mb-2 font-bold">EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    value={data.email}
                    onChange={e => updateData({ email: e.target.value })}
                    className="w-full bg-zinc-950 border border-white/20 px-5 py-4 text-lg focus:border-white outline-none transition-colors" 
                    placeholder="jane@example.com" 
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <button onClick={prevStep} className="px-6 py-4 border border-white/20 hover:bg-white/5 transition-colors">
                  <ArrowLeft size={20} />
                </button>
                <button 
                  onClick={handleNextFromContactInfo}
                  disabled={!canProceed()}
                  className="flex-1 bg-white text-black py-4 flex items-center justify-center gap-2 font-bold disabled:opacity-50 transition-all hover:bg-white/90"
                >
                  NEXT <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-xl"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">What is your order number?</h2>
              <p className="text-white/40 text-center mb-8">You can find this in your confirmation email (e.g. #NVRLND-123456)</p>
              <div className="mb-8">
                <input 
                  type="text" 
                  autoFocus
                  value={data.orderNumber}
                  onChange={e => updateData({ orderNumber: e.target.value })}
                  className="w-full bg-zinc-950 border border-white/20 px-5 py-4 text-lg focus:border-white outline-none transition-colors text-center" 
                  placeholder="#NVRLND-" 
                />
              </div>
              <div className="flex gap-4">
                <button onClick={prevStep} className="px-6 py-4 border border-white/20 hover:bg-white/5 transition-colors">
                  <ArrowLeft size={20} />
                </button>
                <button 
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className="flex-1 bg-white text-black py-4 flex items-center justify-center gap-2 font-bold disabled:opacity-50 transition-all hover:bg-white/90"
                >
                  NEXT <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-xl"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">How can we help?</h2>
              <p className="text-white/40 text-center mb-8">Provide as much detail as possible so we can resolve this quickly.</p>
              <div className="mb-8">
                <textarea 
                  rows={6}
                  autoFocus
                  value={data.message}
                  onChange={e => updateData({ message: e.target.value })}
                  className="w-full bg-zinc-950 border border-white/20 px-5 py-4 text-lg focus:border-white outline-none transition-colors resize-none" 
                  placeholder="Type your message here..." 
                />
              </div>
              <div className="flex gap-4">
                <button onClick={handlePrevFromMessage} className="px-6 py-4 border border-white/20 hover:bg-white/5 transition-colors">
                  <ArrowLeft size={20} />
                </button>
                <button 
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className="flex-1 bg-white text-black py-4 flex items-center justify-center gap-2 font-bold disabled:opacity-50 transition-all hover:bg-white/90"
                >
                  SUBMIT MESSAGE <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div 
              key="step4"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md text-center"
            >
              <div className="flex justify-center mb-6">
                <CheckCircle size={64} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
              <p className="text-white/60 mb-8 text-lg">
                Thanks for reaching out, {data.name.split(' ')[0]}. Our team will get back to you at {data.email} within 24 hours.
              </p>
              <button 
                onClick={() => navigate("/")}
                className="w-full bg-white text-black py-4 font-bold tracking-wider hover:bg-white/90 transition-colors"
              >
                RETURN HOME
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Only show Footer on success or maybe hide it entirely for a cleaner survey feel? 
          Survey tools often hide the footer to reduce distraction. 
          Let's keep it but make it fade in at the end, or just leave it at the bottom.
          Since it's flex-1, it pushes footer to bottom. */}
      {step === 4 && <Footer />}
    </div>
  );
}
