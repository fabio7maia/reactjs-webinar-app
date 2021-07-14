import { ApiConfig } from '@configs';
import { Todo } from '@types';

interface UseFetchSetTodoStatusInput {
  id: string;
  status: number;
}

type UseFetchSetTodoStatusOutput = Array<Todo>;

export const useFetchSetTodoStatus = (): ((
  input: UseFetchSetTodoStatusInput
) => Promise<UseFetchSetTodoStatusOutput>) => {
  return (input: UseFetchSetTodoStatusInput): Promise<UseFetchSetTodoStatusOutput> => {
    return fetch(`${ApiConfig.url}/status`, {
      method: 'post',
      body: JSON.stringify(input),
      headers: { 'content-type': 'application/json' }
    })
      .then((res) => res.json())
      .then((res) => res.data);
  };
};
