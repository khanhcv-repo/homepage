import React from "react";
import { motion } from "motion/react";
import { COMPANY_NAME, SLOGAN, CORE_DOMAIN, CLIENT_LOGOS } from "../data";
import { ArrowRight, Check } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-16 pb-0 flex flex-col overflow-hidden text-[#1F2937]">
      {/* Top Part with Gradient Background */}
      <div className="gradient-hero w-full pt-10 pb-2">
        {/* Main Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
          
          {/* Text Left (Cols: 6/12) */}
          <div className="flex flex-col justify-center text-left" id="hero-text-content">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-none mb-4 text-[#25A69A]"
              id="hero-title"
            >
              NeuroShin AI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl font-display italic font-medium text-[#1F2937] mb-6 tracking-wide drop-shadow-sm"
              id="hero-slogan"
            >
              {SLOGAN}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-[#1F2937] leading-relaxed max-w-xl mb-8 font-sans font-normal"
              id="hero-description"
            >
              {CORE_DOMAIN}
            </motion.p>

            {/* Buttons Group */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
              id="hero-buttons"
            >
              <a
                href="#pricing"
                className="px-8 py-4 bg-[#35AFA3] hover:bg-[#35AFA3] text-white rounded-2xl font-bold transition-all duration-300 hover:shadow-xl hover:shadow-[#35AFA3]/20 hover:-translate-y-1 flex items-center gap-2 text-base"
              >
                無料体験
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white border-2 border-[#25A69A] text-[#25A69A] hover:bg-[#25A69A] hover:text-white rounded-2xl font-bold transition-all duration-300 flex items-center gap-2 text-base hover:-translate-y-1"
              >
                開発者に問い合わせる
              </a>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#1F2937] font-mono"
              id="hero-features-list"
            >
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#35AFA3]" /> APPI準拠
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#35AFA3]" /> ISO 27001 セキュリティ
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#35AFA3]" /> 100% オンプレミス対応
              </div>
            </motion.div>
          </div>

          {/* Hero Image Right (Cols: 6/12) */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 1, y: 0 }}
            animate={{ opacity: 1, x: 0, scale: 1.1, y: 60 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="w-full flex justify-center items-center relative z-0"
            id="hero-image"
          >
            <div className="w-full relative flex justify-center items-center">
              <img 
                src="/maytinh3.png" 
                alt="NeuroShin AI Platform" 
                className="w-full h-auto object-contain max-w-4xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>

    {/* Logo Carousel Client List */}
      <div className="w-full bg-white border-t border-slate-100 pt-4 pb-4 overflow-hidden relative z-10 shadow-[0_-15px_40px_rgba(0,0,0,0.04)]" id="client-carousel">
        <div className="max-w-7xl mx-auto px-4 mb-2 text-center pt-5">
          <p className="text-[15px] uppercase tracking-[0.3em] text-slate-800 font-black">アジアを代表する信頼のテクノロジーパートナー</p>
        </div>
        
        {/* Infinite Scroll Wrapper */}
        <div className="relative w-full flex overflow-x-hidden">
          {/* Track */}
          <div className="animate-marquee flex gap-2 whitespace-nowrap min-w-full justify-start items-center">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-1 group cursor-default"
              >
                <div className="w-30 h-22 flex items-center justify-center transition-all duration-500">
                  <img 
                    src={logo.logoUrl} 
                    alt={`${logo.name} logo`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      if (!img.src.includes('clearbit')) {
                        img.src = `https://logo.clearbit.com/${logo.domain}`;
                      } else if (!img.src.includes('ui-avatars')) {
                        img.src = `https://ui-avatars.com/api/?name=${logo.name}&background=f1f5f9&color=64748b`;
                      }
                    }}
                  />
                </div>
                <span className="font-display font-black text-[#1F2937] text-sm tracking-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
