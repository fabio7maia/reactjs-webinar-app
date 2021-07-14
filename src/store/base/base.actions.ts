import { baseActionTypes, BaseState } from './base.types';

export interface BaseAction {
  type: string;
  payload: BaseState;
}

export const updateBaseState = (payload: BaseState): BaseAction => {
  return {
    type: baseActionTypes.updateBaseState,
    payload
  };
};
