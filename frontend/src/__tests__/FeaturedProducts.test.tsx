import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FeaturedProducts from '../components/FeaturedProducts';
import React from 'react';

describe('FeaturedProducts Component - Detailed', () => {
  it('renders products with badges and pricing', () => {
    render(<FeaturedProducts />);
    
    // Check ShinChat Pro
    expect(screen.getByText('ShinChat Pro')).toBeInTheDocument();
    expect(screen.getByText('ベストセラー')).toBeInTheDocument();
    expect(screen.getByText('月額 ¥19,800')).toBeInTheDocument();

    // Check DataShin
    expect(screen.getByText('DataShin Analytics')).toBeInTheDocument();
    expect(screen.getByText('企業向け')).toBeInTheDocument();
  });

  it('identifies the most valuable product with a ribbon', () => {
    render(<FeaturedProducts />);
    const ribbon = screen.getByText('最もお得');
    expect(ribbon).toHaveClass('bg-[#FF5A36]');
    expect(ribbon.closest('div')).toHaveClass('rotate-45');
  });

  it('lists detailed features for the main products', () => {
    render(<FeaturedProducts />);
    const features = [
      "ネイティブレベルの日本語と英語をサポート",
      "20種類以上のインテリジェントなチャートを自動描画",
      "認識精度99.8%を達成"
    ];
    features.forEach(f => {
      expect(screen.getByText(new RegExp(f, 'i'))).toBeInTheDocument();
    });
  });

  it('uses brand colors for CTA buttons', () => {
    render(<FeaturedProducts />);
    const ctas = screen.getAllByText('今すぐ体験を始める');
    expect(ctas[0]).toHaveClass('text-[#25A69A]'); // ShinChat Pro button theme
    expect(ctas[1]).toHaveClass('bg-[#FF5A36]'); // DataShin button theme
  });
});
