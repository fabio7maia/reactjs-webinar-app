import { ApiConfig } from '@configs';
import { Todo } from '@types';

interface UseFetchAddTodoInput {
  todo: string;
}

type UseFetchAddTodoOutput = Array<Todo>;

export const useFetchAddTodo = (): ((
  input: UseFetchAddTodoInput
) => Promise<UseFetchAddTodoOutput>) => {
  return (input: UseFetchAddTodoInput): Promise<UseFetchAddTodoOutput> => {
    return fetch(`${ApiConfig.url}/todo`, {
      method: 'post',
      body: JSON.stringify(input),
      headers: { 'content-type': 'application/json' }
    })
      .then((res) => res.json())
      .then((res) => res.data);
  };
};
