import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TestComponent } from '@components';
import { NewTodo } from '..';

describe('NewTodo', () => {
  test('render works', () => {
    render(
      <TestComponent>
        <NewTodo
          onClickAdd={() => {
            console.log('NewTodo > onClickAdd');
          }}
        />
      </TestComponent>
    );

    expect(screen).toBeDefined();
  });

  test('has add button', () => {
    render(
      <TestComponent>
        <NewTodo
          onClickAdd={() => {
            console.log('NewTodo > onClickAdd');
          }}
        />
      </TestComponent>
    );

    const button = screen.getByText(/add/i);

    expect(button).toBeInTheDocument();
  });

  test('click add button', async () => {
    render(
      <TestComponent>
        <NewTodo
          onClickAdd={() => {
            console.log('NewTodo > onClickAdd');
          }}
        />
      </TestComponent>
    );

    const button = screen.getByText(/add/i);

    button.click();
  });
});
