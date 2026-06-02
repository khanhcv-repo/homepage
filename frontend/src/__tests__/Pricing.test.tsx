import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Pricing from '../components/Pricing';
import React from 'react';

describe('Pricing Component - Detailed', () => {
  it('renders pricing plans with correct features', () => {
    render(<Pricing />);
    
    // Starter Plan
    expect(screen.getByText('スタータープラン')).toBeInTheDocument();
    expect(screen.getByText('¥6,600')).toBeInTheDocument();
    expect(screen.getByText(/月間5,000リクエスト制限/i)).toBeInTheDocument();

    // Business Plan
    const bizPlan = screen.getByText('ビジネスプラン').closest('div[id^="pricing-card-"]');
    expect(bizPlan).toHaveClass('bg-[#25A69A]'); // Popular highlight
    expect(screen.getByText('最も人気')).toBeInTheDocument();
  });

  it('calculates 20% discount correctly when annual billing is toggled', () => {
    render(<Pricing />);
    const toggle = document.querySelector('#billing-toggle');
    if (toggle) fireEvent.click(toggle);

    // Business Plan original ¥26,400. Discount 20% = ¥21,120. Code rounds to ¥21,100
    // Actually looking at code: Math.round(num * 0.8 / 100) * 100
    // 26400 * 0.8 = 21120. 21120 / 100 = 211.2. Math.round(211.2) = 211. 211 * 100 = 21100.
    expect(screen.getByText('¥21,100')).toBeInTheDocument();
    expect(screen.getAllByText(/お得/).length).toBeGreaterThan(0);
  });

  it('renders specific CTAs for different plans', () => {
    render(<Pricing />);
    const starterBtn = screen.getByText('無料で始める');
    expect(starterBtn).toHaveClass('bg-[#FF5A36]');
    
    const bizBtn = screen.getByText('無料トライアルを開始');
    expect(bizBtn).toHaveClass('text-[#25A69A]');
  });

  it('displays the Japan tax disclaimer', () => {
    render(<Pricing />);
    expect(screen.getByText(/消費税（10%）は含まれておりません/i)).toBeInTheDocument();
  });
});
