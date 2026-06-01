import React from "react";
import { COMPANY_NAME, SLOGAN } from "../data";
import { Cpu, Phone, Mail, MapPin, Linkedin, Facebook, Youtube, Twitter, Github, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: "ShinChat Pro", href: "#products" },
    { name: "DataShin Analytics", href: "#products" },
    { name: "ShinVision", href: "#products" },
    { name: "ContentShin Studio", href: "#products" },
    { name: "API Marketplace", href: "#products" },
  ];

  const companyLinks = [
    { name: "NeuroShin AI について", href: "#why-us" },
    { name: "創設チーム", href: "#hero" },
    { name: "パートナー採用", href: "#hero" },
    { name: "プレス＆メディア", href: "#news" },
    { name: "直接お問い合わせ", href: "#contact" },
  ];

  const resourceLinks = [
    { name: "技術APIドキュメント", href: "#" },
    { name: "共有ブログ", href: "#news" },
    { name: "実際のケーススタディ", href: "#" },
    { name: "詳細ウェビナー", href: "#" },
    { name: "開発者コミュニティ", href: "#" },
  ];

  const legalLinks = [
    { name: "プライバシーポリシー", href: "#" },
    { name: "利用規約", href: "#" },
    { name: "クッキーポリシー", href: "#" },
    { name: "APPI準拠", href: "#" },
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Youtube className="h-5 w-5" />, href: "#", label: "YouTube" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
  ];

  return (
    <footer id="footer" className="bg-white text-[#1F2937] pt-20 pb-8 border-t border-[#25A69A]/20 overflow-hidden relative">
      {/* Decorative vector shape background */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#B6966A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid structure of Footer info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16" id="footer-main-grid">
          
          {/* Logo & Slogan Column (Cols: 4) */}
          <div className="lg:col-span-4 flex flex-col text-left" id="footer-company-column">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-[#35AFA3] to-[#35AFA3] text-[#1F2937] shadow-md">
                <Cpu className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold tracking-tight text-[#1F2937]">{COMPANY_NAME}</span>
                <span className="text-[10px] font-mono text-[#35AFA3] tracking-wider -mt-1 font-bold">
                  日本テクノロジー
                </span>
              </div>
            </div>
            <p className="text-sm font-display italic text-[#35AFA3] mb-4">
              {SLOGAN}
            </p>
            <p className="text-xs text-[#1F2937] leading-relaxed font-sans mb-6 max-w-sm">
              NeuroShin AI は、アジアを代表する最先端のAIソリューションを創造し、企業のプロセス自動化の飛躍と、最高峰の顧客体験の構築を支援します。
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5" id="footer-social-row">
              {socialLinks.map((soc, sIdx) => (
                <a
                  key={sIdx}
                  href={soc.href}
                  aria-label={soc.label}
                  className="p-2.5 rounded-xl bg-slate-800 text-[#1F2937] border border-slate-700/50 hover:bg-[#35AFA3] hover:text-[#1F2937] hover:-translate-y-0.5 transition-all duration-300"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid: Products, Company, Resources, Legal (Cols: 8) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-left" id="footer-links-grid">
            
            {/* Products Column */}
            <div id="footer-col-products">
              <h4 className="text-xs font-mono font-bold tracking-widest text-[#35AFA3] uppercase mb-4">
                製品
              </h4>
              <ul className="space-y-3">
                {productLinks.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href} className="text-xs text-[#1F2937] hover:text-[#25A69A] transition-colors duration-200">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div id="footer-col-company">
              <h4 className="text-xs font-mono font-bold tracking-widest text-[#35AFA3] uppercase mb-4">
                会社
              </h4>
              <ul className="space-y-3">
                {companyLinks.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href} className="text-xs text-[#1F2937] hover:text-[#25A69A] transition-colors duration-200">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div id="footer-col-resources">
              <h4 className="text-xs font-mono font-bold tracking-widest text-[#35AFA3] uppercase mb-4">
                リソース
              </h4>
              <ul className="space-y-3">
                {resourceLinks.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href} className="text-xs text-[#1F2937] hover:text-[#25A69A] transition-colors duration-200 flex items-center gap-0.5">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div id="footer-col-legal">
              <h4 className="text-xs font-mono font-bold tracking-widest text-[#35AFA3] uppercase mb-4">
                法的情報
              </h4>
              <ul className="space-y-3">
                {legalLinks.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href} className="text-xs text-[#1F2937] hover:text-[#25A69A] transition-colors duration-200">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Contact info, hotline, email, address (Center Block width highlight styling) */}
        <div className="py-8 my-8 border-y border-[#25A69A]/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left" id="footer-branches-info">
          
          {/* Hotline */}
          <div className="flex gap-3 items-center group">
            <div className="p-3 bg-slate-800 rounded-2xl text-[#35AFA3] group-hover:bg-[#35AFA3] group-hover:text-[#1F2937] transition-colors duration-300 shrink-0">
              <Phone className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono tracking-wider text-[#1F2937] font-semibold uppercase leading-none mb-1">無料カスタマーサポートホットライン</span>
              <a href="tel:0120-888-999" className="text-sm font-display font-black text-[#1F2937] hover:text-[#35AFA3] transition-colors duration-200 mt-0.5">
                0120-888-999
              </a>
              <span className="text-[10px] text-[#1F2937] tracking-tight leading-normal mt-0.5">
                9:00 – 18:00 JST | 月曜日 – 金曜日
              </span>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-3 items-center group">
            <div className="p-3 bg-slate-800 rounded-2xl text-[#35AFA3] group-hover:bg-[#35AFA3] group-hover:text-[#1F2937] transition-colors duration-300 shrink-0">
              <Mail className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono tracking-wider text-[#1F2937] font-semibold uppercase leading-none mb-1">提携お問い合わせ用メールアドレス</span>
              <a href="mailto:hello@neuroshin-ai.co.jp" className="text-sm font-display font-black text-[#1F2937] hover:text-[#35AFA3] transition-colors duration-200 mt-0.5">
                hello@neuroshin-ai.co.jp
              </a>
              <span className="text-[10px] text-[#1F2937] tracking-tight leading-normal mt-0.5">
                JST 2営業時間以内に返信いたします
              </span>
            </div>
          </div>

          {/* Location / Address */}
          <div className="flex gap-3 items-start group">
            <div className="p-3 bg-slate-800 rounded-2xl text-[#35AFA3] group-hover:bg-[#35AFA3] group-hover:text-[#1F2937] transition-colors duration-300 shrink-0">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono tracking-wider text-[#1F2937] font-semibold uppercase leading-none mb-1">東京本社</span>
              <span className="text-xs text-[#1F2937] group-hover:text-[#1F2937] leading-snug font-sans font-medium mt-1">
                〒100-0005 東京都千代田区丸の内1丁目9番2号 グラントウキョウサウスタワー 18F
              </span>
            </div>
          </div>

        </div>

        {/* Copyright notice row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-4 border-t border-[#25A69A]/5 text-xs text-[#1F2937]" id="footer-bottom-copyright">
          <p className="font-sans font-medium">
            © 2025-{currentYear} <strong>NeuroShin AI KK</strong>. All rights reserved.
          </p>
          <div className="flex gap-4 font-mono text-[10px]" id="powered-credits">
            <span>Built in Tokyo & Hanoi</span>
            <span>|</span>
            <span className="flex items-center gap-0.5">
              Powered by <span className="font-extrabold text-[#35AFA3] tracking-tight">NeuroShin JaLLM v2.0</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
