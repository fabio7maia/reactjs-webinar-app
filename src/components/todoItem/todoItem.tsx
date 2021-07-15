/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import { Block, InputDropdown } from '@reactjs-webinar/general';
import { Todo } from '@types';

interface TodoItemProps {
  todo: Todo;
  onChangeStatus: (todo: Todo) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onChangeStatus }) => {
  const { status } = todo;

  const handleOnChangeTodoStatus = React.useCallback(
    (value?: string) => {
      const status = Number(value);

      onChangeStatus({ ...todo, status });
    },
    [onChangeStatus, todo]
  );

  return (
    <Block style={{ padding: '5px 0', justifyContent: 'center', height: '100%' }}>
      <Block style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Block>{todo.todo}</Block>
        <Block style={{ justifyContent: 'center' }}>
          <InputDropdown
            label="Status"
            name="status"
            value={status?.toString()}
            onChange={handleOnChangeTodoStatus}
            items={[
              { label: 'New', value: '10' },
              { label: 'In Progress', value: '20' },
              { label: 'Done', value: '30' }
            ]}
            style={{ width: '200px' }}
          />
        </Block>
      </Block>
      <Block style={{ height: '2px', margin: '5px 0 0 0', backgroundColor: '#d7d7d7' }} />
    </Block>
  );
};
