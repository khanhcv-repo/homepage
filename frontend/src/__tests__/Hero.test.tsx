import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from '../components/Hero';
import React from 'react';

describe('Hero Component - Detailed', () => {
  it('renders all textual content from data.ts', () => {
    render(<Hero />);
    expect(screen.getByText('NeuroShin AI')).toBeInTheDocument();
    // Assuming SLOGAN and CORE_DOMAIN are present in data.ts
    const slogan = screen.getByText(/より深く考え/i);
    expect(slogan).toBeInTheDocument();
    expect(slogan).toHaveClass('italic');
    
    const description = screen.getByText(/業務を自動化し/i);
    expect(description).toBeInTheDocument();
  });

  it('verifies CTA buttons and their styling', () => {
    render(<Hero />);
    const primaryBtn = screen.getByText('無料体験');
    expect(primaryBtn).toHaveClass('bg-[#35AFA3]');
    expect(primaryBtn.getAttribute('href')).toBe('#pricing');

    const secondaryBtn = screen.getByText('開発者に問い合わせる');
    expect(secondaryBtn).toHaveClass('border-[#25A69A]');
    expect(secondaryBtn.getAttribute('href')).toBe('#contact');
  });

  it('renders high-quality hero image with specific filters', () => {
    render(<Hero />);
    const img = screen.getByAltText(/NeuroShin AI プラットフォーム/i);
    expect(img).toBeInTheDocument();
    expect(img.style.filter).toContain('brightness(1.05)');
  });

  it('contains the infinite scroll client marquee', () => {
    render(<Hero />);
    const marqueeContainer = document.querySelector('.animate-marquee');
    expect(marqueeContainer).toBeInTheDocument();
    // Check if it has multiple logos (tripled in code)
    const logos = marqueeContainer?.querySelectorAll('img');
    expect(logos?.length).toBeGreaterThan(10);
  });
});
