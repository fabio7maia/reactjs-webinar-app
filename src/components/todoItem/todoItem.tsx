/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import { Block } from '@reactjs-webinar/general';
import { Todo } from '@types';

interface TodoItemProps {
  todo: Todo;
  onChangeStatus: (todo: Todo) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onChangeStatus }) => {
  const { status } = todo;

  const handleOnChangeTodoStatus = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const status = Number(event.target.value);

      onChangeStatus({ ...todo, status });
    },
    [onChangeStatus, todo]
  );

  return (
    <Block style={{ padding: '5px 0', justifyContent: 'center', height: '100%' }}>
      <Block style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Block>{todo.todo}</Block>
        <Block style={{ justifyContent: 'center' }}>
          <select onChange={handleOnChangeTodoStatus} value={status.toString()}>
            <option value="10">New</option>
            <option value="20">In Progress</option>
            <option value="30">Done</option>
          </select>
        </Block>
      </Block>
      <Block style={{ height: '2px', margin: '5px 0 0 0', backgroundColor: '#d7d7d7' }} />
    </Block>
  );
};
