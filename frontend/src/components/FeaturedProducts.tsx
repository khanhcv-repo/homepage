import React from "react";
import { motion } from "motion/react";
import { FEATURED_PRODUCTS } from "../data";
import { Check, ArrowRight, Star, BarChart, Eye, FileText, MessageSquarePlus } from "lucide-react";

export default function FeaturedProducts() {
  const getProductIcon = (id: string) => {
    switch (id) {
      case "prod-1":
        return <MessageSquarePlus className="h-6 w-6 text-[#35AFA3]" />;
      case "prod-2":
        return <BarChart className="h-6 w-6 text-[#35AFA3]" />;
      case "prod-3":
        return <Eye className="h-6 w-6 text-[#35AFA3]" />;
      case "prod-4":
        return <FileText className="h-6 w-6 text-[#35AFA3]" />;
      default:
        return <Star className="h-6 w-6 text-[#35AFA3]" />;
    }
  };

  return (
    <section id="featured-products" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#25A69A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#35AFA3]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16" id="products-header">
          <div className="max-w-xl text-left">
            <span className="text-sm font-bold tracking-widest text-[#35AFA3] uppercase font-mono mb-2 block">
              主要製品
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
              NeuroShin の主力製品
            </h2>
            <div className="w-16 h-1 bg-[#25A69A] mt-4 mb-2 rounded-full" />
          </div>
          <p className="text-base text-slate-600 mt-4 md:mt-0 max-w-md text-left md:text-right">
            事前設定済みで即座に運用可能なAIプラットフォームは、企業が売上の飛躍的な向上と大幅なコスト削減を同時に実現するのを支援します。
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12" id="products-cards-grid">
          {FEATURED_PRODUCTS.map((prod, idx) => {
            const isFirst = idx === 0; // ShinChat Pro
            
            // Define themes: idx 0 is highlighted (vibrant), others are clean
            const theme = isFirst 
              ? { // ShinChat Pro - Bright Highlight (Teal)
                  bg: "bg-[#25A69A]", 
                  border: "border-[#25A69A]", 
                  text: "text-white", 
                  sub: "text-teal-50", 
                  accent: "bg-white/20", 
                  btn: "bg-white hover:bg-slate-50 text-[#25A69A] shadow-xl" 
                }
              : { // Other Products - Clean Professional Theme
                  bg: "bg-[#E6F4F1]", 
                  border: "border-[#25A69A]/10", 
                  text: "text-[#1F2937]", 
                  sub: "text-slate-500", 
                  accent: "bg-white", 
                  btn: "bg-[#FF5A36] hover:bg-[#FF6B4A] text-white shadow-lg shadow-[#FF5A36]/20" 
                };
            
            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-3xl border p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl ${
                  isFirst ? theme.bg + " " + theme.border + " text-white relative overflow-hidden scale-105 z-20" : theme.bg + " " + theme.border + " text-slate-800"
                }`}
                id={`featured-${prod.id}`}
              >
                {/* Special Highlight Ribbon for ShinChat Pro */}
                {isFirst && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-[#FF5A36] text-white text-[10px] font-black py-1 px-10 transform rotate-45 translate-x-10 translate-y-3 shadow-md">
                      最もお得
                    </div>
                  </div>
                )}
                
                <div>
                  {/* Badge & Icon Row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                      isFirst ? "bg-[#35AFA3] text-white" : "bg-white/50 text-slate-900 border border-black/5"
                    }`}>
                      {prod.badge}
                    </span>
                    <div className={`p-3 rounded-2xl ${isFirst ? "bg-slate-800" : "bg-white/80"} shadow-inner`}>
                      {getProductIcon(prod.id)}
                    </div>
                  </div>

                  {/* Title & Slogan */}
                  <div className="mb-4 text-left">
                    <h3 className={`text-2xl font-display font-extrabold leading-tight ${isFirst ? "text-white" : "text-slate-900"}`}>
                      {prod.name}
                    </h3>
                    <p className={`text-xs mt-1 italic ${isFirst ? "text-teal-50" : "text-slate-500"}`}>
                      {prod.tagline}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className={`mb-6 flex items-baseline gap-1 rounded-2xl px-4 py-3 border ${
                    isFirst ? "bg-white/10 border-white/10" : "bg-white border-black/5 shadow-sm"
                  }`}>
                    <span className="text-sm font-semibold opacity-75">費用: </span>
                    <span className={`text-2xl font-display font-extrabold ${isFirst ? "text-white" : "text-[#25A69A]"}`}>
                      {prod.price}
                    </span>
                  </div>

                  {/* Metric Stat */}
                  <div className={`text-xs font-mono font-semibold mb-6 flex items-center gap-1.5 ${isFirst ? "text-teal-50" : "text-[#1F2937]"}`}>
                    <span className={`inline-block w-2 h-2 rounded-full ${isFirst ? "bg-white" : "bg-[#35AFA3]"} animate-pulse`} />
                    {prod.metrics}
                  </div>

                  {/* Feature Checklists */}
                  <div className={`space-y-3.5 mb-8 text-left border-t pt-6 ${isFirst ? "border-white/10" : "border-black/5"}`}>
                    {prod.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <div className={`mt-0.5 rounded-full p-0.5 flex items-center justify-center shrink-0 ${
                          isFirst ? "bg-white/20 text-white" : "bg-[#25A69A]/10 text-[#25A69A]"
                        }`}>
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span className={`text-xs sm:text-sm leading-relaxed ${isFirst ? "text-teal-50" : "text-slate-600"}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className={`pt-4 border-t ${isFirst ? "border-white/10" : "border-black/5"}`}>
                  <a
                    href="#pricing"
                    className={`w-full py-3 px-5 rounded-2xl font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${theme.btn}`}
                  >
                    今すぐ体験を始める
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
