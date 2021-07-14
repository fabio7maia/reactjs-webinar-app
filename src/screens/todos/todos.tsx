import React from 'react';
import { Block } from '@reactjs-webinar/general';
import { useTheme } from '@reactjs-webinar/theme/dist/hooks';
import { useFetchAddTodo, useFetchAllTodos, useFetchSetTodoStatus } from '@services';
import { NewTodo, TodoItem } from '@components';
import { Todo } from '@types';

export const Todos: React.FC = () => {
  const fetchTodos = useFetchAllTodos();
  const fetchAddTodo = useFetchAddTodo();
  const fetchSetTodoStatus = useFetchSetTodoStatus();
  const [todos, setTodos] = React.useState<Array<Todo>>([]);
  const theme = useTheme();

  React.useEffect(() => {
    fetchTodos().then((res) => setTodos(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnClickAdd = React.useCallback(
    (todo: string) => {
      fetchAddTodo({ todo }).then((res) => setTodos(res));
    },
    [fetchAddTodo]
  );

  const handleOnChangeStatus = React.useCallback(
    (todo: Todo) => {
      const { id, status } = todo;

      fetchSetTodoStatus({ id, status }).then((res) => setTodos(res));
    },
    [fetchSetTodoStatus]
  );

  return (
    <Block>
      <NewTodo onClickAdd={handleOnClickAdd} />
      <Block
        style={{
          margin: '50px 0 0 0',
          padding: '10px',
          border: `5px solid ${theme.colors.secondary}`,
          borderRadius: '10px'
        }}>
        <Block>
          {todos.map((x) => (
            <React.Fragment key={x.id}>
              <TodoItem todo={x} onChangeStatus={handleOnChangeStatus} />
            </React.Fragment>
          ))}
        </Block>
      </Block>
    </Block>
  );
};
