import { createStore, Store, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { baseReducer, BaseState } from './base';

export interface StoreState {
  base: BaseState;
}

export const configureStore = (): Store<StoreState> => {
  return createStore(
    combineReducers({ base: baseReducer }),
    process.env.NODE_ENV.toLowerCase() !== 'production' ? composeWithDevTools() : undefined
  );
};
