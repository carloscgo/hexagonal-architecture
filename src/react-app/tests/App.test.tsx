import React from 'react';
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from "../app/App";

describe('<App />', () => {
    test('renders layout component', () => {
        render(
            <App />
        );
        const layoutComponent = screen.getByTestId('layout-component');
        expect(layoutComponent).toBeInTheDocument();
    });

    test('can toggle react-query-devtools', () => {
        render(
            <App />
        );
        const devtoolsToggleButton = screen.getByText('Toggle Devtools');
        expect(devtoolsToggleButton).toBeInTheDocument();

        // Open devtools and check for presence of close button
        userEvent.click(devtoolsToggleButton);
        const devtoolsCloseButton = screen.getByText('Close React Query Devtools');
        expect(devtoolsCloseButton).toBeInTheDocument();

        // Close devtools and check that it's hidden again
        userEvent.click(devtoolsCloseButton);
        expect(devtoolsToggleButton).toBeInTheDocument();
    });
});