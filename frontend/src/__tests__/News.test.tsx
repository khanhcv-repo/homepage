import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import News from '../components/News';
import React from 'react';

describe('News Component - Detailed', () => {
  it('renders all news categories with specific colors', () => {
    render(<News />);
    
    const categories = [
      { name: "製品", color: "bg-amber-100" },
      { name: "研究", color: "bg-emerald-100" },
      { name: "ニュース", color: "bg-blue-100" }
    ];

    categories.forEach(cat => {
      const badge = screen.getByText(cat.name);
      expect(badge).toHaveClass(cat.color);
    });
  });

  it('displays publication dates and read time', () => {
    render(<News />);
    // Data in data.ts uses 2026
    expect(screen.getAllByText(/2026/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/読了時間：5分/i).length).toBeGreaterThan(0);
  });

  it('highlights the first article as the latest', () => {
    render(<News />);
    const latestBadge = screen.getByText('LATEST');
    expect(latestBadge).toHaveClass('bg-[#FF5A36]');
    
    const latestCard = latestBadge.closest('article');
    expect(latestCard).toHaveClass('border-[#25A69A]');
  });
});
