import { render, screen, fireEvent } from '@testing-library/react';
import ButtonTheme from '../../app/components/ButtonTheme';
import { describe, test, expect, beforeEach } from 'vitest';

describe('ButtonTheme', () => {
  beforeEach(() => {
    // reset local storage before each test to avoid state conflicts
    localStorage.clear();
  });

  test('renders moon and sun icons', () => {
    render(<ButtonTheme />);
    const moonIcon = screen.getByLabelText('moon icon');
    const sunIcon = screen.getByLabelText('sun icon');
    expect(moonIcon).toBeInTheDocument();
    expect(sunIcon).toBeInTheDocument();
  });

  test('clicking moon icon sets dark theme', () => {
    render(<ButtonTheme />);
    const moonIcon = screen.getByLabelText('moon icon');
    fireEvent.click(moonIcon);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  test('clicking sun icon sets light theme', () => {
    render(<ButtonTheme />);
    const sunIcon = screen.getByLabelText('sun icon');
    fireEvent.click(sunIcon);
    expect(document.documentElement.classList.contains('light')).toBe(true);
  });
});
