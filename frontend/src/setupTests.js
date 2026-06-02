import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock IntersectionObserver as a class for Framer Motion compatibility
class IntersectionObserverMock {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
  }
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
