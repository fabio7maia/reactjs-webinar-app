import { Company, Language, Platform } from '@reactjs-webinar/general/dist/$types';
import { BaseAction } from './base.actions';
import { baseActionTypes, BaseState } from './base.types';

const initialBaseState: BaseState = {
  company: Company.company1,
  language: Language.pt,
  platform: Platform.mobile
};

export const baseReducer = (state = initialBaseState, action: BaseAction): BaseState => {
  if (baseActionTypes.updateBaseState === action.type) {
    return {
      ...state,
      ...action.payload
    };
  }

  return state;
};
