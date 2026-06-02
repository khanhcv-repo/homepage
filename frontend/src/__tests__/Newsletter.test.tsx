import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Newsletter from '../components/Newsletter';
import React from 'react';

describe('Newsletter Component - Detailed', () => {
  it('presents the subscriber count and brand value', () => {
    render(<Newsletter />);
    expect(screen.getByText(/25,000人以上/i)).toBeInTheDocument();
    expect(screen.getByText(/毎週のAIトレンドアップデート/i)).toBeInTheDocument();
  });

  it('validates the email input field requirements', () => {
    render(<Newsletter />);
    const input = screen.getByPlaceholderText(/ビジネスメールアドレス/i);
    expect(input).toHaveAttribute('required');
    expect(input).toHaveAttribute('type', 'email');
  });

  it('completes the subscription flow with success UI', async () => {
    render(<Newsletter />);
    const input = screen.getByPlaceholderText(/ビジネスメールアドレス/i);
    const button = screen.getByText('無料で登録する');

    fireEvent.change(input, { target: { value: 'marketing@neuroshin.jp' } });
    fireEvent.click(button);

    // Check loading state
    expect(screen.getByText('登録中...')).toBeInTheDocument();

    // Check success state
    await waitFor(() => {
      expect(screen.getByText('登録が完了しました！')).toBeInTheDocument();
      expect(screen.getByText(/NeuroShin AI エリートコミュニティ/i)).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  it('allows user to reset and subscribe again', async () => {
    render(<Newsletter />);
    // Fill and submit
    fireEvent.change(screen.getByPlaceholderText(/ビジネスメールアドレス/i), { target: { value: 'reset@test.com' } });
    fireEvent.click(screen.getByText('無料で登録する'));
    
    await waitFor(() => screen.getByText('別のメールアドレスを登録する'), { timeout: 3000 });
    
    fireEvent.click(screen.getByText('別のメールアドレスを登録する'));
    expect(screen.getByPlaceholderText(/ビジネスメールアドレス/i)).toBeInTheDocument();
  });
});
