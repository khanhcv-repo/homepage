import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Testimonials from '../components/Testimonials';
import React from 'react';

describe('Testimonials Component - Detailed', () => {
  it('renders testimonial content with star ratings', () => {
    render(<Testimonials />);
    
    // Assuming 3 testimonials in data.ts
    const cards = document.querySelectorAll('[id^="testimonial-card-"]');
    expect(cards.length).toBe(3);

    // Check for stars in first card
    const firstCardStars = document.querySelector('#stars-rating-0');
    expect(firstCardStars?.querySelectorAll('svg').length).toBe(5);
  });

  it('displays author credentials accurately', () => {
    render(<Testimonials />);
    expect(screen.getByText('Yamamoto Kenji')).toBeInTheDocument();
    expect(screen.getByText(/CTO/i)).toBeInTheDocument();
    expect(screen.getByText(/Rakuten/i)).toBeInTheDocument();
  });

  it('uses vibrant brand avatars for authors', () => {
    render(<Testimonials />);
    const avatars = document.querySelectorAll('.w-10.h-10.rounded-full');
    expect(avatars[0]).toHaveClass('bg-[#FF5A36]');
    expect(avatars[0].textContent).toBe('Y'); // First letter of Yamamoto
  });
});
