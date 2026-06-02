import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Services from '../components/Services';
import React from 'react';

describe('Services Component - Detailed', () => {
  it('renders section headers with correct typography', () => {
    render(<Services />);
    const badge = screen.getByText('テクノロジー領域');
    expect(badge).toHaveClass('font-mono');
    expect(badge).toHaveClass('text-[#35AFA3]');
    
    expect(screen.getByText('包括的なAI製品ポートフォリオ')).toBeInTheDocument();
  });

  it('verifies service cards have distinct icons and backgrounds', () => {
    render(<Services />);
    const serviceTitles = [
      "AIチャットボット＆バーチャルアシスタント",
      "AIデータ分析",
      "AIコンテンツ生成",
      "AI画像認識",
      "AI予測＆最適化",
      "AIセキュリティ"
    ];

    serviceTitles.forEach(title => {
      const card = screen.getByText(title).closest('div[id^="service-card-"]');
      expect(card).toBeInTheDocument();
      expect(card).toHaveClass('bg-[#dffbfb]');
      
      // Check for presence of Lucide icon container
      const iconContainer = card?.querySelector('.w-12.h-12');
      expect(iconContainer).toBeInTheDocument();
    });
  });

  it('has interactive "Read more" buttons for all services', () => {
    render(<Services />);
    const moreButtons = screen.getAllByText('さらに詳しく');
    expect(moreButtons.length).toBe(6);
    moreButtons.forEach(btn => {
      expect(btn).toHaveClass('font-semibold');
    });
  });
});
