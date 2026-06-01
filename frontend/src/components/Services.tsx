import React from "react";
import { motion } from "motion/react";
import { AI_SERVICES } from "../data";
import { MessageSquare, BarChart3, PenTool, Eye, TrendingUp, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function Services() {
  const getIcon = (id: string) => {
    switch (id) {
      case "svc-1":
        return <MessageSquare className="h-6 w-6" />;
      case "svc-2":
        return <BarChart3 className="h-6 w-6" />;
      case "svc-3":
        return <PenTool className="h-6 w-6" />;
      case "svc-4":
        return <Eye className="h-6 w-6" />;
      case "svc-5":
        return <TrendingUp className="h-6 w-6" />;
      case "svc-6":
        return <ShieldCheck className="h-6 w-6" />;
      default:
        return <MessageSquare className="h-6 w-6" />;
    }
  };

  return (
    <section id="products" className="py-24 bg-[#F8FAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="services-title-block">
          <span className="text-sm font-bold tracking-widest text-[#35AFA3] uppercase font-mono mb-2 block">
            テクノロジー領域
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
            包括的なAI製品ポートフォリオ
          </h2>
          <div className="w-16 h-1 bg-[#35AFA3] mx-auto mb-6 rounded-full" />
          <p className="text-base text-slate-600 font-sans">
            独自の自己学習型機械学習モデルを擁し、現代のビジネス活動の生産性を高めるために特別に設計された、最先端のAIソリューションを提供します。
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
          {AI_SERVICES.map((svc, idx) => {
            // Distinct vibrant colors for icon backgrounds
            const iconBgColors = [
              "bg-[#FF5A36]", // Orange
              "bg-[#3B82F6]", // Blue
              "bg-[#8B5CF6]", // Purple
              "bg-[#10B981]", // Green
              "bg-[#F59E0B]", // Amber
              "bg-[#6366F1]"  // Indigo
            ];

            const theme = { 
              bg: "bg-[#E6F4F1]", 
              icon: iconBgColors[idx % iconBgColors.length], 
              text: "text-white",
              border: "border-[#25A69A]/10" 
            };
            
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group relative overflow-hidden rounded-3xl p-8 shadow-sm border flex flex-col justify-between hover:shadow-xl hover:border-[#35AFA3]/30 transition-all duration-300 ${theme.bg} ${theme.border}`}
                id={`service-card-${svc.id}`}
              >
                {/* Backglow decoration */}
                <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-[#E6F4F1]/20 group-hover:bg-[#E6F4F1]/40 transition-colors duration-300 pointer-events-none" />

                <div>
                  {/* Icon Circle */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 ${theme.icon} ${theme.text}`}>
                    {getIcon(svc.id)}
                  </div>

                  {/* Sub title */}
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-3 transition-colors duration-200">
                    {svc.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-sm text-slate-600 leading-relaxed font-sans mb-8">
                    {svc.description}
                  </p>
                </div>

                {/* Readmore / Link with Highlight text */}
                <div className="flex items-center justify-between pt-4 border-t border-black/5 mt-auto">
                  <span className="text-[11px] font-mono tracking-wider text-slate-400 font-semibold uppercase">
                    NeuroShin Tech
                  </span>
                  <span className={`text-xs font-semibold flex items-center gap-1 transition-colors duration-200 cursor-pointer ${theme.text}`}>
                    さらに詳しく
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
