import { ApiConfig } from '@configs';
import { Todo } from '@types';

type seFetchAllTodosOutput = Array<Todo>;

export const useFetchAllTodos = (): (() => Promise<seFetchAllTodosOutput>) => {
  return (): Promise<seFetchAllTodosOutput> => {
    return fetch(`${ApiConfig.url}/todos`, {
      method: 'get',
      headers: { 'content-type': 'application/json' }
    })
      .then((res) => res.json())
      .then((res) => res.data);
  };
};
