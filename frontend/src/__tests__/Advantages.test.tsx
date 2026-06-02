import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Advantages from '../components/Advantages';
import React from 'react';

describe('Advantages Component - Detailed', () => {
  it('presents the company competitive narrative', () => {
    render(<Advantages />);
    expect(screen.getByText(/なぜ NeuroShin AI なのか？/i)).toBeInTheDocument();
    expect(screen.getByText(/私たちは単にコードを書いたり/i)).toBeInTheDocument();
  });

  it('highlights Japanese security compliance', () => {
    render(<Advantages />);
    expect(screen.getByText('日本APPI準拠のセキュリティ')).toBeInTheDocument();
    expect(screen.getByText(/ISO 27001/i)).toBeInTheDocument();
  });

  it('renders all 6 advantage cards with distinct icons', () => {
    render(<Advantages />);
    const advantageTitles = [
      "独自開発의 AIモデル",
      "日本語への深い最適化",
      "絶対的なデータセキュリティ",
      "容易かつ柔軟な統合",
      "継続的な自己学習とアップグレード",
      "マンツーマンの導入支援"
    ];

    advantageTitles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
    
    // Check for icon background colors
    const icons = document.querySelectorAll('#advantages-grid div.w-11.h-11');
    expect(icons.length).toBe(6);
  });
});
