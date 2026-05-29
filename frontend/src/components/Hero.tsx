import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { COMPANY_NAME, SLOGAN, CORE_DOMAIN, CLIENT_LOGOS } from "../data";
import { ArrowRight, Sparkles, Send, Bot, User, Check, Zap } from "lucide-react";

export default function Hero() {
  const [chatInput, setChatInput] = useState("");
  const [chatLog, setChatLog] = useState([
    {
      sender: "bot",
      text: "こんにちは！私は NeuroShin AI によってトレーニングされた ShinChat Pro です。貴社のカスタマーサービスをどのように革新できるか、お手伝いしましょうか？"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sampleQuestions = [
    { text: "ShinChat Pro について教えてください。", label: "🤖 ShinChat" },
    { text: "APPIのセキュリティはどうなっていますか？", label: "🔒 セキュリティ" },
    { text: "日本語の最適化はどのように行われていますか？", label: "🇯🇵 日本語" }
  ];

  const handleSendMessage = (text: string) => {
    if (!text.trim() || isTyping) return;
    
    // Add user message
    setChatLog((prev) => [...prev, { sender: "user", text }]);
    setChatInput("");
    setIsTyping(true);

    // Simulate smart bot response based on keywords
    setTimeout(() => {
      let reply = "NeuroShin AI にご興味をお持ちいただきありがとうございます。貴社の技術革新を全力でサポートいたします！";
      
      const lowerText = text.toLowerCase();
      if (lowerText.includes("shinchat") || lowerText.includes("giới thiệu") || lowerText.includes("について")) {
        reply = "ShinChat Pro は、日本語と英語を深く理解する当社の優れた次世代AI対話アシスタントです。月額わずか ¥19,800 で10,000件の同時通話をサポートし、1行のコードでWebサイトやアプリに簡単に統合できます。";
      } else if (lowerText.includes("bảo mật") || lowerText.includes("appi") || lowerText.includes("an toàn") || lowerText.includes("セキュリティ")) {
        reply = "NeuroShin AI は ISO 27001 および APPI（日本の個人情報保護法）を遵守しています。すべてのデータは完全に暗号化され、独立して保存されます。公開モデルのトレーニングに使用されることはありません。";
      } else if (lowerText.includes("tiếng nhật") || lowerText.includes("ngôn ngữ") || lowerText.includes("văn hóa") || lowerText.includes("日本語")) {
        reply = "ChatGPTとは異なり、当社の独自モデル JaLLM 2.0 は、日本語の語彙構造、敬語、および日本企業特有のビジネス文化に合わせて深く最適化されています。";
      }

      setChatLog((prev) => [...prev, { sender: "bot", text: reply }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-16 flex flex-col justify-between overflow-hidden bg-[#1E302D] text-white">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#86ABA5]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#FF5A36]/10 rounded-full blur-3xl" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Text Left (Cols: 7) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left" id="hero-text-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#86ABA5]/20 text-[#86ABA5] text-xs font-semibold tracking-wider uppercase mb-6 self-start border border-[#86ABA5]/30"
              id="hero-badge"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#FF5A36]" />
              AIソリューションのパイオニア
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-none mb-4 text-[#86ABA5]"
              id="hero-title"
            >
              NeuroShin AI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl font-display italic font-medium text-[#FF5A36] mb-6 tracking-wide drop-shadow-sm"
              id="hero-slogan"
            >
              {SLOGAN}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-8 font-sans font-normal"
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
                className="px-8 py-4 bg-[#FF5A36] hover:bg-[#FF6B4A] text-white rounded-2xl font-bold transition-all duration-300 hover:shadow-xl hover:shadow-[#FF5A36]/20 hover:-translate-y-1 flex items-center gap-2 text-base"
              >
                無料体験
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-transparent border-2 border-[#86ABA5] text-[#86ABA5] hover:bg-[#86ABA5] hover:text-[#1E302D] rounded-2xl font-bold transition-all duration-300 flex items-center gap-2 text-base hover:-translate-y-1"
              >
                開発者に問い合わせる
              </a>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400 font-mono"
              id="hero-features-list"
            >
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#FF5A36]" /> APPI準拠
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#FF5A36]" /> ISO 27001 セキュリティ
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#FF5A36]" /> 100% オンプレミス対応
              </div>
            </motion.div>
          </div>

          {/* Interactive Chat Box Right (Cols: 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 w-full flex justify-center"
            id="hero-interactive"
          >
            <div className="w-full max-w-md rounded-3xl overflow-hidden bg-[#86ABA5]/10 border border-[#86ABA5]/30 shadow-2xl backdrop-blur-md flex flex-col h-[400px]">
              
              {/* Header */}
              <div className="bg-[#86ABA5] px-5 py-4 flex items-center justify-between border-b border-[#1E302D]/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5A36] animate-ping" />
                  <span className="font-display font-bold text-slate-900 text-sm">ShinChat Pro インタラクティブデモ</span>
                </div>
                <span className="text-[10px] font-mono bg-[#1E302D]/20 text-slate-900 font-bold px-2 py-0.5 rounded-full">
                  v2.0 JaLLM
                </span>
              </div>

              {/* Chat screen */}
              <div className="flex-grow p-4 overflow-y-auto space-y-3 flex flex-col scrollbar-thin scrollbar-thumb-brand scrollbar-track-transparent">
                {chatLog.map((msg, i) => (
                  <div
                    key={i}
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-xs leading-relaxed ${
                      msg.sender === "bot"
                        ? "bg-[#86ABA5] text-slate-900 rounded-tl-none self-start"
                        : "bg-[#FF5A36] text-white rounded-tr-none self-end"
                    }`}
                  >
                    <div className="flex items-center gap-1 mb-1 font-bold text-[10px] opacity-75">
                      {msg.sender === "bot" ? <Bot className="h-3 w-3" /> : <User className="h-3 w-3" />}
                      {msg.sender === "bot" ? "ShinChat Pro" : "あなた"}
                    </div>
                    {msg.text}
                  </div>
                ))}

                {isTyping && (
                  <div className="bg-[#86ABA5] text-[#1E302D] rounded-2xl rounded-tl-none px-4 py-2.5 text-xs self-start max-w-[80%] flex items-center gap-1">
                    <span className="font-bold text-[10px] flex items-center gap-0.5">
                      <Bot className="h-3 w-3 animate-bounce" /> ShinChat が入力中
                    </span>
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce delay-100">.</span>
                    <span className="animate-bounce delay-200">.</span>
                  </div>
                )}
              </div>

              {/* Sample prompts */}
              <div className="p-3 bg-slate-900/30 border-t border-[#86ABA5]/10 flex flex-wrap gap-1.5 justify-start">
                {sampleQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(q.text)}
                    className="text-[10px] font-medium bg-[#1E302D] text-[#86ABA5] border border-[#86ABA5]/20 hover:border-[#FF5A36] hover:text-[#FF5A36] px-2.5 py-1 rounded-xl transition-all duration-200 cursor-pointer"
                  >
                    {q.label}
                  </button>
                ))}
              </div>

              {/* Message inputs */}
              <div className="p-3 bg-[#1E302D] border-t border-[#86ABA5]/20 flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage(chatInput)}
                  placeholder="NeuroShin のAIソリューションについて質問する..."
                  className="flex-grow bg-slate-800/80 border border-[#86ABA5]/20 focus:border-[#FF5A36] focus:outline-none rounded-xl px-3.5 py-2 text-xs text-white"
                />
                <button
                  onClick={() => handleSendMessage(chatInput)}
                  className="p-2 bg-[#FF5A36] hover:bg-[#FF6B4A] active:scale-95 text-white rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Infinite Logo Carousel Client List */}
      <div className="w-full bg-[#1E302D] border-t border-[#86ABA5]/10 py-10 overflow-hidden relative" id="client-carousel">
        <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#86ABA5] font-semibold">アジアを代表する信頼のテクノロジーパートナー</p>
        </div>
        
        {/* Infinite Scroll Wrapper */}
        <div className="relative w-full flex overflow-x-hidden">
          {/* Track */}
          <div className="animate-marquee flex gap-12 whitespace-nowrap min-w-full justify-around items-center py-2">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-2 rounded-2xl bg-white/5 border border-white/5 hover:border-[#86ABA5]/30 hover:bg-[#80ABA5]/10 transition-all duration-300 cursor-default"
              >
                <div className="w-20 h-8 rounded-lg bg-white/90 p-1 flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-110 shadow-sm border border-slate-100">
                  <img 
                    src={logo.logoUrl} 
                    alt={`${logo.name} logo`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      if (!img.src.includes('clearbit')) {
                        img.src = `https://logo.clearbit.com/${logo.domain}`;
                      } else if (!img.src.includes('ui-avatars')) {
                        img.src = `https://ui-avatars.com/api/?name=${logo.name}&background=86ABA5&color=fff`;
                      }
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-white text-sm tracking-wider leading-none">{logo.name}</span>
                  <span className="text-[9px] font-mono text-slate-400 opacity-60 mt-1 uppercase">| {logo.industry}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
