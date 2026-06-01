import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);

    // Simulate server action
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setEmail("");
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Visual background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#25A69A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Container box with brand style - VIBRANT HIGHLIGHT */}
        <div className="bg-gradient-to-br from-[#25A69A] to-[#35AFA3] rounded-3xl p-8 sm:p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
          
          {/* Background Sage-Teal Circle lines */}
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full border border-white/10 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full border border-white/10 pointer-events-none" />

          {/* Heading */}
          <div className="max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-bold tracking-widest text-white bg-white/20 px-3.5 py-1.5 rounded-full uppercase font-mono mb-6 inline-block">
              週刊 AI インテリジェンス
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight leading-tight mb-4">
              毎週のAIトレンドアップデート – 完全無料
            </h2>
            <p className="text-teal-50 text-sm sm:text-base leading-relaxed font-sans font-normal">
              毎週、<strong className="text-white text-base">25,000人以上</strong>のテクノロジーリーダーが NeuroShin AI ニュースレターを読んでいます。インサイト、実際のケーススタディ、限定特典をメールボックスに trực tiếp お届けします。
            </p>
          </div>

          {/* Form / Success switch */}
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3 items-stretch justify-center"
                id="newsletter-form"
              >
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-teal-200">
                    <Mail className="h-5 w-5" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ビジネスメールアドレスを入力してください..."
                    className="w-full bg-white/10 hover:bg-white/20 focus:bg-white/30 border border-white/20 focus:border-white focus:outline-none rounded-2xl pl-12 pr-4 py-4 text-sm text-white placeholder-teal-100 transition-all duration-300 h-full"
                    id="newsletter-email-input"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#FF5A36] hover:bg-[#FF6B4A] text-white font-bold text-sm px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:-translate-y-0.5 shrink-0 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  id="newsletter-submit-btn"
                >
                  {loading ? (
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 w-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      登録中...
                    </span>
                  ) : (
                    <>
                      無料で登録する
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="max-w-md mx-auto p-6 bg-white/10 border border-white/20 rounded-3xl flex flex-col items-center justify-center text-center"
                id="newsletter-success-box"
              >
                <div className="w-12 h-12 rounded-full bg-white text-[#25A69A] flex items-center justify-center mb-4 shadow-lg shadow-black/10 animate-bounce">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h4 className="font-display font-bold text-white text-base mb-1">登録が完了しました！</h4>
                <p className="text-xs text-teal-50 leading-relaxed font-sans">
                  NeuroShin AI エリートコミュニティへようこそ。最初の分析レポートは来週の月曜日にメールボックスに届きます。
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-mono font-bold text-white/70 hover:text-white mt-4 underline cursor-pointer"
                >
                  別のメールアドレスを登録する
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
