import { render, screen } from '@testing-library/react';
import { TestComponent } from '@components';
import { TopBar } from '..';

describe('TopBar', () => {
  test('render works', () => {
    render(
      <TestComponent>
        <TopBar />
      </TestComponent>
    );

    expect(screen).toBeDefined();
  });
});
