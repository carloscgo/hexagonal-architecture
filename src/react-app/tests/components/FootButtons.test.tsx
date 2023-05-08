import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FootButtons from '../../app/components/FootButtons';
import { describe, test, expect } from 'vitest';

describe('FootButtons', () => {
  test('renders back link and submit button', () => {
    render(
      <MemoryRouter>
        <FootButtons routeBack="/" label="Submit" isSubmitting={false} isValid={true} />
      </MemoryRouter>,
    );
    const backButton = screen.getByText('goBack');
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    expect(backButton).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('disables submit button when isSubmitting is true or isValid is false', () => {
    render(
      <MemoryRouter>
        <FootButtons routeBack="/" label="Submit" isSubmitting={true} isValid={true} />
      </MemoryRouter>,
    );
    const submitButton = screen.getByRole('button', { name: 'creating' });
    expect(submitButton).toBeDisabled();

    render(
      <MemoryRouter>
        <FootButtons routeBack="/" label="Submit" isSubmitting={false} isValid={false} />
      </MemoryRouter>,
    );
    expect(submitButton).toBeDisabled();
  });
});
