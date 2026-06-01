import React, { useState } from "react";
import { motion } from "motion/react";
import { PRICING_PLANS } from "../data";
import { Check, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-[#FFFFFF] relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#25A69A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="pricing-title-block">
          <span className="text-sm font-bold tracking-widest text-[#35AFA3] uppercase font-mono mb-2 block animate-pulse">
            柔軟なライセンス
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1F2937] tracking-tight mb-4">
            売上を飛躍させるパートナーシップ料金プラン
          </h2>
          <div className="w-16 h-1 bg-[#35AFA3] mx-auto mb-6 rounded-full" />
          <p className="text-base text-slate-600 font-sans">
            現在の規模に最適な投資レベルを選択してください。成長の節目に合わせて、いつでもプランのアップグレード、解約、またはモデルの微調整が可能です。
          </p>

          {/* Pricing Toggle Option for fun */}
          <div className="mt-8 flex justify-center items-center gap-3" id="pricing-toggle-box">
            <span className={`text-xs sm:text-sm font-semibold transition-colors ${!isAnnual ? "text-[#35AFA3]" : "text-slate-400"}`}>
              月払い
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-12 h-6 rounded-full bg-[#1F2937] p-1 transition-all flex items-center relative duration-300"
              id="billing-toggle"
            >
              <div className={`w-4 h-4 rounded-full bg-[#25A69A] absolute transition-all duration-300 ${isAnnual ? "right-1" : "left-1"}`} />
            </button>
            <span className={`text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 ${isAnnual ? "text-[#35AFA3]" : "text-slate-400"}`}>
              年払い
              <span className="text-[10px] font-extrabold bg-[#35AFA3] text-white px-1.5 py-0.5 rounded-full uppercase leading-none">
                -20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Table Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16" id="pricing-cards-grid">
          {PRICING_PLANS.map((plan, idx) => {
            const isPopular = plan.isPopular;
            // Calculate a yearly simulated discount price structure
            let displayedPrice = plan.price;
            if (isAnnual && plan.price !== "お問い合わせ" && plan.price !== "Liên hệ") {
              // Convert text ¥XX,XXX to number, subtract 20%, convert back
              const num = parseInt(plan.price.replace(/[^\d]/g, ""), 10);
              const discounted = Math.round(num * 0.8 / 100) * 100;
              displayedPrice = `¥${discounted.toLocaleString()}`;
            }

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between border transition-all duration-300 text-left ${
                  isPopular
                    ? "bg-[#1F2937] border-[#35AFA3] shadow-2xl scale-102 lg:scale-105 z-10 text-white"
                    : "bg-[#25A69A]/70 border-white/40 shadow-xl text-slate-900"
                }`}
                id={`pricing-card-${idx}`}
              >
                {/* Popular badge */}
                {isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#35AFA3] text-white px-4 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase shadow-md shadow-[#35AFA3]/20 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 animate-pulse" />
                    最も選ばれているプラン
                  </span>
                )}

                <div>
                  {/* Name and desc */}
                  <div className="mb-6">
                    <h3 className={`text-xl sm:text-2xl font-display font-extrabold ${isPopular ? "text-[#25A69A]" : "text-[#1F2937]"}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${isPopular ? "text-slate-300" : "text-slate-700"} font-medium`}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Pricing line */}
                  <div className="mb-8 border-y border-[#1F2937]/10 py-5 flex flex-col">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-3xl sm:text-4xl font-display font-black tracking-tight ${isPopular ? "text-[#35AFA3]" : "text-[#1F2937]"}`}>
                        {displayedPrice}
                      </span>
                      <span className={`text-xs font-semibold ${isPopular ? "text-slate-400" : "text-slate-800"}`}>
                        / {plan.period}
                      </span>
                    </div>
                    {isAnnual && plan.price !== "お問い合わせ" && plan.price !== "Liên hệ" && (
                      <span className="text-[10px] font-mono text-[#35AFA3] mt-1 font-bold">
                        （月々 ¥{Math.round(parseInt(plan.price.replace(/[^\d]/g, ""), 10) * 0.2).toLocaleString()} お得）
                      </span>
                    )}
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <Check className={`h-4 w-4 mt-0.5 shrink-0 ${isPopular ? "text-[#25A69A]" : "text-slate-900"}`} />
                        <span className={`text-xs sm:text-sm ${isPopular ? "text-slate-200" : "text-slate-850"} leading-snug font-medium`}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing button */}
                <div className="mt-auto pt-6 border-t border-[#1F2937]/10 flex flex-col gap-3">
                  <a
                    href={plan.buttonLink}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                      isPopular
                        ? "bg-[#35AFA3] hover:bg-[#35AFA3] text-white shadow-lg shadow-[#35AFA3]/20 hover:-translate-y-0.5"
                        : "bg-[#1F2937] hover:bg-slate-800 text-white shadow-sm hover:-translate-y-0.5"
                    }`}
                  >
                    {plan.buttonText}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  
                  {/* Additional helper buttons required by user: "Bắt đầu miễn phí | So sánh gói | Link to Enterprise" */}
                  <div className="flex justify-between items-center px-1 text-[10px] font-mono font-bold">
                    <a href="#contact" className="hover:text-[#35AFA3] underline transition-colors">詳細を比較</a>
                    {plan.name !== "エンタープライズプラン" ? (
                      <a href="#contact" className="hover:text-[#35AFA3] flex items-center gap-0.5 transition-colors">
                        カスタムリクエスト
                      </a>
                    ) : (
                      <span className="opacity-50">SLA 24h</span>
                    )}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Small terms disclaimer info */}
        <div className="p-6 rounded-2xl bg-[#25A69A]/10 border border-[#25A69A]/25 max-w-3xl mx-auto flex gap-3 text-left">
          <AlertCircle className="h-5 w-5 text-[#35AFA3] shrink-0 mt-0.5" />
          <p className="text-xs text-slate-600 leading-relaxed font-sans font-medium">
            <strong>日本での展開に関するご注意：</strong> 上記のすべての単価には、日本で適用される消費税（10%）は含まれておりません。日本国外の多国籍企業のお客様は、適切な免税措置について当社の法務部門に直接お問い合わせください。
          </p>
        </div>

      </div>
    </section>
  );
}
