import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FeaturedProducts from "./components/FeaturedProducts";
import Stats from "./components/Stats";
import Advantages from "./components/Advantages";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import News from "./components/News";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { ArrowUp } from "lucide-react";

export default function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-[#F2F6F5] text-slate-800 font-sans selection:bg-[#FF5A36] selection:text-white" id="root-app-wrapper">
      {/* Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main id="main-content">
        {/* Banner Hero */}
        <Hero />

        {/* 6 AI Services List */}
        <Services />

        {/* Mid Stats Metrics */}
        <Stats />

        {/* 4 Featured Products (ShinChat Pro, DataShin, etc) */}
        <FeaturedProducts />

        {/* Advantage Value Propositons: What about NeuroShin AI? */}
        <Advantages />

        {/* Pricing Tables */}
        <Pricing />

        {/* Client Testimonials */}
        <Testimonials />

        {/* News & Research */}
        <News />

        {/* Newsletter Subscription */}
        <Newsletter />
      </main>

      {/* Corporate Footers */}
      <Footer />

      {/* Floating Scroll To Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3.5 bg-[#FF5A36] hover:bg-[#FF6B4A] active:scale-95 text-white rounded-2xl shadow-lg shadow-[#FF5A36]/20 cursor-pointer border border-[#FF5A36]/10 transition-all duration-300"
            aria-label="トップへ戻る"
            id="scroll-to-top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
