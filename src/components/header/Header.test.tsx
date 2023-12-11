import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Header from './Header';

describe('Tests for header component', () => {
  it('Make sure the component is rendering', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const header = screen.getByRole('banner');
    const buttonGroup = screen.getByRole('group');
    const mainLink = screen.getByRole('link', { name: 'Home' });

    expect(header).toBeInTheDocument();
    expect(buttonGroup).toBeInTheDocument();
    expect(mainLink).toBeInTheDocument();
  });

  it('Make sure clicking a link redirects to the appropriate page', async () => {
    render(<Header />, { wrapper: BrowserRouter });

    const mainLink = screen.getByRole('link', { name: 'Home' });
    const loginLink = screen.getByRole('link', { name: 'Log in' });
    const signupLink = screen.getByRole('link', { name: 'Sign up' });

    await userEvent.click(loginLink);
    expect(window.location.pathname).toBe('/login');

    await userEvent.click(signupLink);
    expect(window.location.pathname).toBe('/signup');

    await userEvent.click(mainLink);
    expect(window.location.pathname).toBe('/');
  });

  it('Check that langSwitcher works', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const langSwitcher = screen.getByTestId('langSwitcher');
    await userEvent.click(langSwitcher);

    //TODO Test for russian language
  });
});