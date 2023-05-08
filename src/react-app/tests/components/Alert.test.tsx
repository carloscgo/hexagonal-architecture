import { cleanup, render, screen } from '@testing-library/react';
import Alert from '../../app/components/Alert';
import { describe, test, expect } from 'vitest';

describe('', () => {
    test('renders with message, title and type', () => {
        const message = 'This is a test message';
        const title = 'title';
        const type = 'warning';

        render(<Alert message={message} title={title} type={type} />);

        const alertText = screen.getByText(message);

        expect(alertText).toBeInTheDocument();
    });

    test('can close the alert', () => {
        const message = 'This is a test message';
        const type = 'warning';

        render(<Alert message={message} type={type} />);

        const closeButton = screen.getByRole('button');

        expect(closeButton).toBeInTheDocument();
    });

    test('renders without title', () => {
        const message = 'This is a test message';
        const type = 'warning';

        render(<Alert message={message} type={type} />);

        const alertText = screen.getByText(message);

        expect(alertText).toBeInTheDocument();
    });

    test('renders with all types', () => {
        const message = 'This is a test message';
        const title = 'title';

        ['danger', 'warning', 'info', 'success'].forEach((type: any) => {
            render(<Alert message={message} title={title} type={type} />);
    
            const alertText = screen.getByText(message);
    
            expect(alertText).toBeInTheDocument();

            cleanup();
        })
    });
});
