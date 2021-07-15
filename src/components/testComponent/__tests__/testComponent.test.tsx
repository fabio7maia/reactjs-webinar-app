import { render, screen } from '@testing-library/react';
import { TestComponent } from '..';

describe('TestComponent', () => {
  test('render works', () => {
    render(<TestComponent />);

    expect(screen).toBeDefined();
  });
});
