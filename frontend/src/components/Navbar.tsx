import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { COMPANY_NAME } from "../data";
import { Cpu, Menu, X, ArrowRight, Globe } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "AI製品", href: "#products" },
    { name: "選ばれる理由", href: "#why-us" },
    { name: "お客様の声", href: "#testimonials" },
    { name: "料金プラン", href: "#pricing" },
    { name: "ニュース", href: "#news" },
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-[#25A69A]/20"
          : "bg-white py-4 border-b border-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" id="nav-logo">
            <div className="p-3 rounded-xl bg-gradient-to-tr from-[#35AFA3] to-[#35AFA3] text-[#1F2937] shadow-md shadow-[#35AFA3]/20 group-hover:scale-110 transition-transform duration-300">
              <Cpu className="h-7 w-7" />
            </div>
            <div className="flex flex-col">
              <span className={`font-display text-2xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? "text-[#1F2937]" : "text-[#1F2937]"}`}>
                {COMPANY_NAME}
              </span>
              <span className="text-[11px] font-mono text-[#35AFA3] tracking-wider -mt-1 font-bold">
                日本テクノロジー
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8" id="desktop-links">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#35AFA3] hover:after:w-full after:transition-all after:duration-300 ${
                  isScrolled ? "text-[#1F2937] hover:text-[#35AFA3]" : "text-[#1F2937] hover:text-[#35AFA3]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4" id="nav-actions">
            <a
              href="#pricing"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#35AFA3] hover:bg-[#35AFA3] transition-all duration-300 hover:shadow-lg hover:shadow-[#35AFA3]/30 hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              無料で始める
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center" id="mobile-toggle-container">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-xl focus:outline-none transition-all duration-200 ${
                isScrolled ? "text-[#1F2937] hover:bg-slate-800/5" : "text-[#1F2937] hover:bg-slate-800/5"
              }`}
              aria-expanded="false"
              id="mobile-menu-btn"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-[#25A69A]/20 overflow-hidden"
            id="mobile-dropdown-menu"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-[#1F2937] hover:text-[#1F2937] hover:bg-[#25A69A]/20 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 pb-2 px-4 border-t border-[#25A69A]/10 flex flex-col gap-3">
                <a
                  href="#pricing"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 px-4 rounded-xl text-sm font-semibold text-white bg-[#35AFA3] hover:bg-[#35AFA3] transition-colors duration-200 shadow-md flex items-center justify-center gap-2"
                >
                  無料で始める
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
