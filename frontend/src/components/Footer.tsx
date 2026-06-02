import React from "react";
import { COMPANY_NAME, SLOGAN } from "../data";
import { Cpu, Phone, Mail, MapPin, Linkedin, Facebook, Youtube, Twitter, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: "ShinChat Pro", href: "#products" },
    { name: "DataShin Analytics", href: "#products" },
    { name: "ShinVision", href: "#products" },
    { name: "ContentShin Studio", href: "#products" },
    { name: "API マーケットプレイス", href: "#products" },
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
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn", brandColor: "#0077B5" },
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook", brandColor: "#1877F2" },
    { icon: <Youtube className="h-5 w-5" />, href: "#", label: "YouTube", brandColor: "#FF0000" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter", brandColor: "#1DA1F2" },
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub", brandColor: "#24292e" },
  ];

  return (
    <footer id="footer" className="bg-[#25A69A] text-white pt-20 pb-8 border-t border-white/10 overflow-hidden relative">
      {/* Decorative vector shape background */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid structure of Footer info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16" id="footer-main-grid">
          
          {/* Logo & Slogan Column (Cols: 4) */}
          <div className="lg:col-span-4 flex flex-col text-left" id="footer-company-column">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-xl bg-white text-[#25A69A] shadow-md">
                <Cpu className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold tracking-tight text-white">{COMPANY_NAME}</span>
                <span className="text-[10px] font-mono text-white/80 tracking-wider -mt-1 font-bold">
                  日本テクノロジー
                </span>
              </div>
            </div>
            <p className="text-sm font-display italic text-white/90 mb-4">
              {SLOGAN}
            </p>
            <p className="text-xs text-white/70 leading-relaxed font-sans mb-6 max-w-sm">
              NeuroShin AI は、アジアを代表する最先端のAIソリューションを創造し、企業のプロセス自動化の飛躍と、最高峰の顧客体験の構築を支援します。
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5" id="footer-social-row">
              {socialLinks.map((soc, sIdx) => (
                <a
                  key={sIdx}
                  href={soc.href}
                  aria-label={soc.label}
                  style={{ color: soc.brandColor }}
                  className="p-2.5 rounded-xl bg-white shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = soc.brandColor;
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.color = soc.brandColor;
                  }}
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
              <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase mb-4">
                製品
              </h4>
              <ul className="space-y-3">
                {productLinks.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href} className="text-xs text-white/70 hover:text-white transition-colors duration-200">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div id="footer-col-company">
              <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase mb-4">
                会社
              </h4>
              <ul className="space-y-3">
                {companyLinks.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href} className="text-xs text-white/70 hover:text-white transition-colors duration-200">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div id="footer-col-resources">
              <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase mb-4">
                リソース
              </h4>
              <ul className="space-y-3">
                {resourceLinks.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href} className="text-xs text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-0.5">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div id="footer-col-legal">
              <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase mb-4">
                法的情報
              </h4>
              <ul className="space-y-3">
                {legalLinks.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href} className="text-xs text-white/70 hover:text-white transition-colors duration-200">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Contact info, hotline, email, address (Center Block width highlight styling) */}
        <div className="py-8 my-8 border-y border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left" id="footer-branches-info">
          
          {/* Hotline */}
          <div className="flex gap-3 items-center group cursor-default">
            <div className="p-3 bg-[#FF5A36] rounded-2xl text-white transition-all duration-300 shrink-0 shadow-lg shadow-[#FF5A36]/20 group-hover:-translate-y-1">
              <Phone className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono tracking-wider text-white/60 font-semibold uppercase leading-none mb-1">無料カスタマーサポートホットライン</span>
              <a href="tel:0120-888-999" className="text-sm font-display font-black text-white hover:text-white/80 transition-colors duration-200 mt-0.5">
                0120-888-999
              </a>
              <span className="text-[10px] text-white/60 tracking-tight leading-normal mt-0.5">
                9:00 – 18:00 日本標準時 | 月曜日 – 金曜日
              </span>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-3 items-center group cursor-default">
            <div className="p-3 bg-[#3B82F6] rounded-2xl text-white transition-all duration-300 shrink-0 shadow-lg shadow-[#3B82F6]/20 group-hover:-translate-y-1">
              <Mail className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono tracking-wider text-white/60 font-semibold uppercase leading-none mb-1">提携お問い合わせ用メールアドレス</span>
              <a href="mailto:hello@neuroshin-ai.co.jp" className="text-sm font-display font-black text-white hover:text-white/80 transition-colors duration-200 mt-0.5">
                hello@neuroshin-ai.co.jp
              </a>
              <span className="text-[10px] text-white/60 tracking-tight leading-normal mt-0.5">
                2営業時間以内に返信いたします
              </span>
            </div>
          </div>

          {/* Location / Address */}
          <div className="flex gap-3 items-start group cursor-default">
            <div className="p-3 bg-[#8B5CF6] rounded-2xl text-white transition-all duration-300 shrink-0 shadow-lg shadow-[#8B5CF6]/20 group-hover:-translate-y-1">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono tracking-wider text-white/60 font-semibold uppercase leading-none mb-1">東京本社</span>
              <span className="text-xs text-white/70 group-hover:text-white leading-snug font-sans font-medium mt-1">
                〒100-0005 東京都千代田区丸の内1丁目9番2号 グラントウキョウサウスタワー 18F
              </span>
            </div>
          </div>

        </div>

        {/* Copyright notice row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-4 border-t border-white/10 text-xs text-white/50" id="footer-bottom-copyright">
          <p className="font-sans font-medium text-white/70">
            © 2025-{currentYear} <strong className="text-white">NeuroShin AI 株式会社</strong>. 全著作権所有.
          </p>
          <div className="flex gap-4 font-mono text-[10px]" id="powered-credits">
            <span>東京とハノイで開発</span>
            <span>|</span>
            <span className="flex items-center gap-0.5">
              提供： <span className="font-extrabold text-white tracking-tight">NeuroShin JaLLM v2.0</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
