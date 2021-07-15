import { render, screen } from '@testing-library/react';
import { TestComponent } from '@components';
import { TodoItem } from '..';

describe('TodoItem', () => {
  test('render works', () => {
    render(
      <TestComponent>
        <TodoItem
          todo={{ id: '1', status: 10, todo: 'test' }}
          onChangeStatus={() => {
            console.log('TodoItem > onChangeStatus');
          }}
        />
      </TestComponent>
    );

    expect(screen).toBeDefined();
  });
});
