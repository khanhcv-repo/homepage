import React from "react";
import { motion } from "motion/react";
import { IMPRESSIVE_STATS } from "../data";
import { Building2, Cpu, Timer, Globe2, Trophy } from "lucide-react";

export default function Stats() {
  const getIcon = (iconName: string) => {
    const iconClass = "h-8 w-8 text-[#35AFA3]";
    switch (iconName) {
      case "Building":
        return <Building2 className={iconClass} />;
      case "Cpu":
        return <Cpu className={iconClass} />;
      case "Clock":
        return <Timer className={iconClass} />;
      case "Globe":
        return <Globe2 className={iconClass} />;
      case "Award":
        return <Trophy className={iconClass} />;
      default:
        return <Trophy className={iconClass} />;
    }
  };

  return (
    <section id="stats" className="py-20 relative overflow-hidden bg-[#25A69A] text-white">
      {/* Decorative grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header summary text */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="stats-title-block">
          <p className="text-sm font-bold tracking-widest text-white/80 uppercase font-mono mb-2">
            NeuroShin 実績指標
          </p>
          <h2 className="text-3xl font-display font-extrabold tracking-tight text-white">
            成功を裏付ける実績
          </h2>
          <div className="w-12 h-1 bg-white/30 mx-auto mt-4" />
        </div>

        {/* Bento/Flex Numbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6" id="stats-grid">
          {IMPRESSIVE_STATS.map((stat, idx) => {
            // First 4 items use the teal theme, 5th item (idx 4) uses golden theme
            const isAward = idx === 4;
            const theme = isAward 
              ? { bg: "bg-[#FFF8E1]", icon: "bg-[#FFE082]", text: "text-[#F57F17]" } // Golden/Award theme
              : { bg: "bg-[#dffbfb]", icon: "bg-[#B2DFDB]", text: "text-[#00796B]" }; // Uniform Teal theme
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`relative overflow-hidden rounded-3xl p-8 flex flex-col justify-between border border-white shadow-sm hover:shadow-md transition-all duration-300 ${theme.bg}`}
                id={`stat-card-${idx}`}
              >
                {/* Icon box */}
                <div className={`mb-6 self-start p-3 rounded-2xl shadow-sm ${theme.icon} ${theme.text}`}>
                  {getIcon(stat.icon || "Trophy")}
                </div>

                {/* Number or Text */}
                <div className="text-left mt-2">
                  <div className={`text-3xl sm:text-4xl font-display font-black tracking-tight leading-none mb-2 ${theme.text}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-slate-900 leading-tight mb-2 uppercase tracking-wide">
                    {stat.label}
                  </div>
                  {stat.description && (
                    <div className="text-xs text-slate-500 font-sans leading-relaxed">
                      {stat.description}
                    </div>
                  )}
                </div>

                {/* Faint accent background glow */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/10 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
