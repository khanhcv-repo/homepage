import React from "react";
import { motion } from "motion/react";
import { ADVANTAGES } from "../data";
import { Cpu, Languages, EyeOff, Code, RefreshCw, HeartHandshake, ShieldAlert } from "lucide-react";

export default function Advantages() {
  const icons = [
    <Cpu className="h-6 w-6 text-white" />,
    <Languages className="h-6 w-6 text-white" />,
    <EyeOff className="h-6 w-6 text-white" />,
    <Code className="h-6 w-6 text-white" />,
    <RefreshCw className="h-6 w-6 text-white" />,
    <HeartHandshake className="h-6 w-6 text-white" />,
  ];

  const iconBgColors = [
    "bg-[#FF5A36]", // Orange
    "bg-[#3B82F6]", // Blue
    "bg-[#8B5CF6]", // Purple
    "bg-[#10B981]", // Green
    "bg-[#F59E0B]", // Amber
    "bg-[#6366F1]"  // Indigo
  ];

  return (
    <section id="why-us" className="py-24 bg-[#F8FAFA] relative overflow-hidden">
      {/* Decorative dots layout */}
      <div className="absolute top-1/2 left-4 w-72 h-72 bg-white/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Narrative (Cols: 5) */}
          <div className="lg:col-span-5 text-left" id="advantages-intro">
            <span className="text-sm font-bold tracking-widest text-[#35AFA3] uppercase font-mono mb-2 block">
              圧倒的な優位性
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              なぜ NeuroShin AI なのか？
            </h2>
            <div className="w-16 h-1 bg-[#FFFFFF] mb-6 rounded-full" />
            <p className="text-slate-600 leading-relaxed font-sans mb-8">
              私たちは単にコードを書いたりソフトウェアを販売したりするのではなく、運用のあり方を再定義し、人的リソースを最適化します。現地の文化を深く理解し、軍事レベルのセキュリティインフラを組み合わせることで、NeuroShin AI は成功する企業の完璧な出発点となります。
            </p>

            {/* Micro visual graphic */}
            <div className="p-6 rounded-3xl bg-[#dffbfb] border border-[#25A69A]/20 flex items-center gap-4 shadow-sm">
              <div className="p-3 bg-[#1F2937] rounded-2xl text-white shrink-0">
                <ShieldAlert className="h-6 w-6 text-[#35AFA3]" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-[#1F2937] font-display">日本APPI準拠のセキュリティ</h4>
                <p className="text-[11px] text-slate-500 font-sans mt-0.5">データは完全にプライベートであり、第三者への漏洩や商業利用は一切ありません。</p>
              </div>
            </div>
          </div>

          {/* Right Block: 6 Advantages (Cols: 7) */}
          <div className="lg:col-span-7" id="advantages-grid-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" id="advantages-grid">
              {ADVANTAGES.map((adv, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="p-6 rounded-3xl bg-[#dffbfb] border border-[#25A69A]/10 hover:border-[#35AFA3]/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group text-left shadow-sm"
                  id={`adv-item-${idx}`}
                >
                  <div>
                    {/* Icon circle box */}
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-all duration-300 ${iconBgColors[idx % 6]}`}>
                      {icons[idx]}
                    </div>

                    {/* Advantage title */}
                    <h4 className="text-sm sm:text-base font-display font-extrabold text-slate-900 group-hover:text-[#35AFA3] transition-colors duration-200 mb-2 leading-snug">
                      {adv.title}
                    </h4>

                    {/* Desc */}
                    <p className="text-xs sm:text-xs text-slate-600 leading-relaxed font-sans font-medium">
                      {adv.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
