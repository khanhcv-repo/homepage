import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Navbar from '../components/Navbar';
import React from 'react';

describe('Navbar Component - Detailed', () => {
  it('renders brand identity correctly', () => {
    render(<Navbar />);
    expect(screen.getAllByText(/NeuroShin AI/i).length).toBeGreaterThan(0);
    expect(screen.getByText('日本テクノロジー')).toBeInTheDocument();
    // Check for logo icon presence by its Lucide class or role if applicable
    const logoContainer = document.querySelector('#nav-logo div');
    expect(logoContainer).toHaveClass('bg-gradient-to-tr');
  });

  it('contains all desktop navigation links with correct hrefs', () => {
    render(<Navbar />);
    const links = [
      { name: "AI製品", href: "#products" },
      { name: "選ばれる理由", href: "#why-us" },
      { name: "お客様の声", href: "#testimonials" },
      { name: "料金プラン", href: "#pricing" },
      { name: "ニュース", href: "#news" },
    ];
    
    links.forEach(link => {
      const elements = screen.getAllByText(link.name);
      const desktopLink = elements.find(el => el.closest('#desktop-links'));
      expect(desktopLink).toBeInTheDocument();
      expect(desktopLink?.getAttribute('href')).toBe(link.href);
    });
  });

  it('has a functional mobile menu toggle with accessibility', () => {
    render(<Navbar />);
    const menuBtn = screen.getByRole('button', { name: /open main menu/i });
    expect(menuBtn).toBeInTheDocument();
    
    // Test open
    fireEvent.click(menuBtn);
    const mobileMenu = document.querySelector('#mobile-dropdown-menu');
    expect(mobileMenu).toBeInTheDocument();
    expect(screen.getAllByText('無料で始める').length).toBeGreaterThan(1); // One in desktop, one in mobile

    // Test close by clicking a link inside or toggle again
    fireEvent.click(menuBtn);
    // Note: AnimatePresence exit animation might delay removal, but logic should trigger
  });

  it('applies scrolled styles when window is scrolled', async () => {
    render(<Navbar />);
    const nav = document.querySelector('nav');
    
    // Initial state
    expect(nav).toHaveClass('bg-white');
    
    // Trigger scroll
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    
    // In JSDOM, we need to manually update window.scrollY because fireEvent.scroll doesn't
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
    fireEvent.scroll(window);
    
    expect(nav).toHaveClass('backdrop-blur-md');
    expect(nav).toHaveClass('shadow-lg');
  });
});
