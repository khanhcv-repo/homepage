import React from "react";
import { motion } from "motion/react";
import { IMPRESSIVE_STATS } from "../data";
import { Building2, Cpu, Timer, Globe2, Trophy } from "lucide-react";

export default function Stats() {
  const getIcon = (iconName: string) => {
    const iconClass = "h-8 w-8 text-[#FF5A36]";
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
    <section id="stats" className="py-20 relative overflow-hidden bg-[#1E302D] text-white">
      {/* Decorative grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#86ABA5_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header summary text */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="stats-title-block">
          <p className="text-sm font-bold tracking-widest text-[#FF5A36] uppercase font-mono mb-2">
            NeuroShin 実績指標
          </p>
          <h2 className="text-3xl font-display font-extrabold tracking-tight">
            成功を裏付ける実績
          </h2>
          <div className="w-12 h-1 bg-[#80ABA5] mx-auto mt-4" />
        </div>

        {/* Bento/Flex Numbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4" id="stats-grid">
          {IMPRESSIVE_STATS.map((stat, idx) => {
            const isAward = stat.icon === "Award";
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`relative overflow-hidden rounded-3xl p-6 flex flex-col justify-between border ${
                  isAward 
                    ? "sm:col-span-2 lg:col-span-1 bg-gradient-to-br from-[#FF5A36]/20 to-[#FF5A36]/5 border-[#FF5A36]/40" 
                    : "bg-[#86ABA5]/10 border-[#86ABA5]/20 hover:border-[#86ABA5]/40"
                } transition-all duration-300`}
                id={`stat-card-${idx}`}
              >
                {/* Icon box */}
                <div className="mb-4 self-start bg-[#1E302D] p-3 rounded-2xl border border-white/5">
                  {getIcon(stat.icon || "Trophy")}
                </div>

                {/* Number or Text */}
                <div className="text-left mt-4">
                  <div className={`text-2xl sm:text-3xl font-display font-black tracking-tight leading-none mb-1 ${
                    isAward ? "text-[#FF5A36]" : "text-[#86ABA5]"
                  }`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-white leading-tight mb-1">
                    {stat.label}
                  </div>
                  {stat.description && (
                    <div className="text-xs text-slate-400 font-sans leading-normal">
                      {stat.description}
                    </div>
                  )}
                </div>

                {/* Faint accent background glow */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-white/5 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
