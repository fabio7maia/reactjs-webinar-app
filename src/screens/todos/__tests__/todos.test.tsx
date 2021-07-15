import { render, screen } from '@testing-library/react';
import { TestComponent } from '@components';
import { Todos } from '..';

describe('Todos', () => {
  test('render works', () => {
    render(
      <TestComponent>
        <Todos />
      </TestComponent>
    );

    expect(screen).toBeDefined();
  });
});
