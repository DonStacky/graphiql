import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ErrorBoundary from './ErrorBoundary';
import { MockWrapper } from '../../test/testUtils';

const errorName = 'generated error';
const error = new Error(errorName);
const ComponentWithError = () => {
  throw error;
};

const Mocktest = () => {
  return (
    <MockWrapper>
      <ErrorBoundary>
        <ComponentWithError />
      </ErrorBoundary>
    </MockWrapper>
  );
};

describe('Tests for ErrorBoundary', () => {
  vi.spyOn(console, 'error').mockImplementation(() => null);

  it('Should render Fallback component on Error', () => {
    render(<Mocktest />);

    const title = screen.getByRole('heading');
    const description = screen.getByText(
      'An unexpected error occurred while the application was running. Try to reload page'
    );

    expect(title).toHaveTextContent('Something went wrong');
    expect(description).toBeInTheDocument();
  });

  it('Should change language in accordance with provider', () => {
    localStorage.setItem('lang', 'ru');
    render(<Mocktest />);

    const title = screen.getByRole('heading');
    const description = screen.getByText(
      'Во время работы приложения произошла непредвиденная ошибка. Попробуйте перезагрузить страницу'
    );

    expect(title).toHaveTextContent('Что-то пошло не так');
    expect(description).toBeInTheDocument();
  });
});
