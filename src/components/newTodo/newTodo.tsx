import React from 'react';
import { Block, Button, InputText } from '@reactjs-webinar/general';

interface NewTodoProps {
  onClickAdd: (todo: string) => void;
}

export const NewTodo: React.FC<NewTodoProps> = ({ onClickAdd }) => {
  const [todo, setTodo] = React.useState<string>();

  const handleOnClickAddTask = React.useCallback(() => {
    if (todo) {
      onClickAdd(todo);
      setTodo('');
    }
  }, [onClickAdd, todo]);

  return (
    <Block>
      <Block>
        <InputText name="todo" label="Todo" value={todo} onChange={setTodo} />
      </Block>

      <Block style={{ margin: '20px 0 0 0' }}>
        <Button onClick={handleOnClickAddTask}>Add</Button>
      </Block>
    </Block>
  );
};
