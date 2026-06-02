import React from "react";
import { motion } from "motion/react";
import { TESTIMONIALS } from "../data";
import { Star, Quote, Heart } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#F8FAFA] relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-white/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title block */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="testimonials-title-block">
          <span className="text-sm font-bold tracking-widest text-[#35AFA3] uppercase font-mono mb-2 block animate-bounce">
            クライアントの成功
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
            お客様の声
          </h2>
          <div className="w-16 h-1 bg-[#FFFFFF] mx-auto mb-6 rounded-full" />
          <p className="text-base text-slate-600 font-sans">
            私たちの能力を測る最も確かな指標は、パートナー企業やユニコーン企業の成功と飛躍的な成長そのものです。
          </p>
        </div>

        {/* 3 Grid testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-cards-grid">
          {TESTIMONIALS.map((test, idx) => {
            const avatarBgColors = [
              "bg-[#FF5A36]", // Orange
              "bg-[#3B82F6]", // Blue
              "bg-[#8B5CF6]", // Purple
              "bg-[#10B981]", // Green
              "bg-[#F59E0B]", // Amber
              "bg-[#6366F1]"  // Indigo
            ];
            const avatarBg = avatarBgColors[idx % avatarBgColors.length];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.96, y: 25 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-[#dffbfb] shadow-sm border border-[#25A69A]/10 flex flex-col justify-between text-left relative group hover:shadow-2xl transition-all duration-300"
                id={`testimonial-card-${idx}`}
              >
                {/* Quotes decoration */}
                <Quote className="absolute top-6 right-6 h-12 w-12 text-[#25A69A]/10 pointer-events-none group-hover:scale-110 transition-transform duration-300" />

                <div>
                  {/* Gold Rating Stars (Text Highlights) */}
                  <div className="flex gap-1 mb-5" id={`stars-rating-${idx}`}>
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="h-4.5 w-4.5 fill-[#FFB800] text-[#FFB800]" />
                    ))}
                  </div>

                  {/* Main feedback quotes */}
                  <p className="text-slate-900/90 text-sm leading-relaxed italic font-sans font-medium mb-8">
                    "{test.content}"
                  </p>
                </div>

                {/* Author footer box */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#1F2937]/10 mt-auto">
                  <div className={`w-10 h-10 rounded-full ${avatarBg} text-white flex items-center justify-center font-display font-black text-sm shadow-md border border-white/20`}>
                    {test.author.charAt(0)}
                  </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-black text-slate-900 text-sm">{test.author}</span>
                  <span className="text-[10px] sm:text-xs font-semibold text-[#1F2937] tracking-wide uppercase">
                    {test.role}, <span className="underline font-bold">{test.company}</span>
                  </span>
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

      </div>
    </section>
  );
}
