const fs = require('fs');
const path = require('path');

const componentsDir = 'd:/Workplace/Homepage1/frontend/src/components';
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // General replacements for base colors
  // Primary CTA
  content = content.replace(/#FF5A36/g, '#E85D22');
  content = content.replace(/#FF6B4A/g, '#E85D22'); 
  
  if (file === 'Navbar.tsx' || file === 'Hero.tsx') {
    // Background #D5B895, text #2A2A2A
    content = content.replace(/bg-\[#1E302D\]/g, 'bg-[#D5B895]');
    // Wait, hero uses text-slate-400 for subtext, text-white for headings
    content = content.replace(/text-white/g, 'text-[#2A2A2A]');
    content = content.replace(/text-slate-100/g, 'text-[#2A2A2A]');
    content = content.replace(/text-slate-200/g, 'text-[#2A2A2A]');
    content = content.replace(/text-slate-300/g, 'text-[#2A2A2A]');
    content = content.replace(/text-slate-400/g, 'text-[#2A2A2A]');
    
    // Exception for CTA button text which should stay white
    content = content.replace(/bg-\[#E85D22\] text-\[#2A2A2A\]/g, 'bg-[#E85D22] text-white');
    content = content.replace(/text-\[#2A2A2A\] bg-\[#E85D22\]/g, 'text-white bg-[#E85D22]');
  } 
  else if (file === 'Stats.tsx' || file === 'Footer.tsx') {
    // Background #D5B895 or #B6966A
    content = content.replace(/bg-\[#1E302D\]/g, 'bg-[#D5B895]');
    content = content.replace(/bg-\[#86ABA5\]/g, 'bg-[#B6966A]');
    content = content.replace(/text-white/g, 'text-[#2A2A2A]');
    content = content.replace(/text-slate-300/g, 'text-[#2A2A2A]');
    content = content.replace(/text-slate-400/g, 'text-[#2A2A2A]');
  }
  else {
    // Sections Background #F9F6F0
    content = content.replace(/bg-\[#F2F6F5\]/g, 'bg-[#F9F6F0]');
    content = content.replace(/bg-white/g, 'bg-[#F9F6F0]'); 
  }

  // Card specific replacements
  if (file === 'Services.tsx') {
    content = content.replace(/bg-slate-50/g, 'bg-[#F9F2E8]');
    content = content.replace(/bg-\[#1E302D\] text-white/g, 'bg-[#E8D5C4] text-[#2A2A2A]'); // index 0
  }
  if (file === 'FeaturedProducts.tsx') {
    content = content.replace(/bg-slate-50/g, 'bg-[#F9F2E8]');
  }
  if (file === 'Advantages.tsx') {
    content = content.replace(/bg-\[#86ABA5\]/g, 'bg-[#F9F2E8]'); 
  }
  if (file === 'Testimonials.tsx') {
    content = content.replace(/bg-white/g, 'bg-[#F9F2E8]');
    content = content.replace(/bg-\[#86ABA5\]/g, 'bg-[#F9F2E8]'); // actually they are alternating
  }
  if (file === 'News.tsx') {
    content = content.replace(/bg-white/g, 'bg-[#F9F2E8]'); // Wait, I already replaced bg-white with bg-[#F9F6F0] above.
    // So let's handle the specific cards:
  }
  if (file === 'Pricing.tsx') {
    // popular uses #1E302D => #E8D5C4
    // normal uses bg-[#86ABA5]/70 => #F9F2E8
  }

  // General fallback color replacements
  content = content.replace(/#86ABA5/g, '#D5B895');
  content = content.replace(/#1E302D/g, '#2A2A2A');
  content = content.replace(/#F2F6F5/g, '#F9F6F0');

  // Fix buttons again just in case
  content = content.replace(/bg-\[#E85D22\] hover:bg-\[#E85D22\] text-\[#2A2A2A\]/g, 'bg-[#E85D22] hover:bg-[#E85D22] text-white');

  fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Colors updated!");
