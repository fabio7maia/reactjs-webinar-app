import { render, screen } from '@testing-library/react';
import { App } from '../app';

describe('App', () => {
  test('render works', () => {
    render(<App />);

    expect(screen).toBeDefined();
  });

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
