import { render, screen } from '@testing-library/react';
import { TestComponent } from '@components';
import { App } from '../app';

describe('App', () => {
  test('render works', () => {
    render(
      <TestComponent>
        <App />
      </TestComponent>
    );

    expect(screen).toBeDefined();
  });
});
