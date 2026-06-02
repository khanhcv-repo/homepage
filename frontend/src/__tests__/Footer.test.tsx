import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '../components/Footer';
import React from 'react';

describe('Footer Component - Detailed', () => {
  it('renders full site structure through link groups', () => {
    render(<Footer />);
    
    const sections = ['製品', '会社', 'リソース', '法的情報'];
    sections.forEach(sec => expect(screen.getByText(sec)).toBeInTheDocument());

    expect(screen.getByText('ShinChat Pro')).toBeInTheDocument();
    expect(screen.getByText('プライバシーポリシー')).toBeInTheDocument();
  });

  it('provides comprehensive contact details for Tokyo HQ', () => {
    render(<Footer />);
    expect(screen.getByText('東京本社')).toBeInTheDocument();
    expect(screen.getByText(/東京都千代田区丸の内1丁目9番2号/i)).toBeInTheDocument();
    expect(screen.getByText('0120-888-999')).toBeInTheDocument();
  });

  it('features social proof and technology credits', () => {
    render(<Footer />);
    const linkedin = screen.getByLabelText('LinkedIn');
    expect(linkedin).toHaveAttribute('href', '#');
    
    expect(screen.getByText(/NeuroShin AI 株式会社/i)).toBeInTheDocument();
    expect(screen.getByText(/NeuroShin JaLLM v2.0/i)).toBeInTheDocument();
  });

  it('has responsive and brand-colored social buttons', () => {
    render(<Footer />);
    const socialRow = document.querySelector('#footer-social-row');
    expect(socialRow).toBeInTheDocument();
    const firstIcon = socialRow?.querySelector('a');
    expect(firstIcon).toHaveStyle({ color: '#0077B5' }); // LinkedIn brand color
  });
});
