import React from "react";
import { motion } from "motion/react";
import { NEWS_RESEARCH } from "../data";
import { ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";

export default function News() {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "製品":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "研究":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "ニュース":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "ハンドブック":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-slate-100 text-slate-800 border-slate-200";
    }
  };

  return (
    <section id="news" className="py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16" id="news-section-header">
          <div className="max-w-xl text-left">
            <span className="text-sm font-bold tracking-widest text-[#35AFA3] uppercase font-mono mb-2 block animate-pulse">
              インサイト ＆ インテリジェンス
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
              研究・ニュースセンター
            </h2>
            <div className="w-16 h-1 bg-[#35AFA3] mt-4 mb-2 rounded-full" />
          </div>
          <p className="text-sm sm:text-base text-slate-600 mt-4 md:mt-0 max-w-md text-left md:text-right">
            NeuroShin の開発ラボから、最新のアカデミックな知識や画期的な独自のAI技術製品を常にお届けします。
          </p>
        </div>

        {/* News Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="news-cards-grid">
          {NEWS_RESEARCH.map((news, idx) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, scale: 0.96, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-3xl bg-[#FAFAFA] border border-[#25A69A]/25 p-6 flex flex-col justify-between hover:shadow-xl hover:border-[#35AFA3]/30 transition-all duration-300 relative group text-left h-full"
              id={`news-item-card-${news.id}`}
            >
              
              <div>
                {/* Visual Category Label */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${getCategoryColor(news.category)}`}>
                    {news.category}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-slate-400 font-mono">
                    <Calendar className="h-3 w-3" />
                    {news.date}
                  </div>
                </div>

                {/* News Title */}
                <h3 className="font-display font-black text-slate-900 text-sm sm:text-base leading-snug group-hover:text-[#35AFA3] transition-colors duration-200 mb-6 line-clamp-3">
                  {news.title}
                </h3>
              </div>

              {/* Read button */}
              <div className="pt-4 border-t border-[#25A69A]/10 mt-auto flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-mono flex items-center gap-0.5">
                  <BookOpen className="h-3.5 w-3.5 text-[#25A69A]" /> 読了時間：5分
                </span>
                <a
                  href={news.link}
                  className="text-xs font-bold text-[#1F2937] group-hover:text-[#35AFA3] flex items-center gap-1 transition-colors duration-200"
                >
                  詳細を見る
                  <ArrowRight className="h-3.5 w-3.5 text-[#35AFA3] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
