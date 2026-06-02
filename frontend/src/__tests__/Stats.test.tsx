import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Stats from '../components/Stats';
import React from 'react';

describe('Stats Component - Detailed', () => {
  it('applies the brand teal background to the section', () => {
    render(<Stats />);
    const section = document.querySelector('#stats');
    expect(section).toHaveClass('bg-[#25A69A]');
  });

  it('renders all 5 achievement cards with specific data', () => {
    render(<Stats />);
    const stats = [
      { val: "50,000+", label: "導入企業数" },
      { val: "99.9%", label: "稼働率コミットメント" },
      { val: "3秒", label: "平均応答時間" },
      { val: "120+", label: "展開国数" },
      { val: "Asia Pacific", label: "AI Innovation Award 2024" }
    ];

    stats.forEach(s => {
      expect(screen.getByText(s.val)).toBeInTheDocument();
      expect(screen.getByText(s.label)).toBeInTheDocument();
    });
  });

  it('highlights the award card with a different theme', () => {
    render(<Stats />);
    const awardCard = document.querySelector('#stat-card-4');
    expect(awardCard).toHaveClass('bg-[#FFF8E1]'); // Golden theme
  });
});
