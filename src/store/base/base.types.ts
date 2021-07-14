import { Company, Language, Platform } from '@reactjs-webinar/general/dist/types';

export interface BaseState {
  company: Company;
  language: Language;
  platform: Platform;
}

export const baseActionTypes = {
  updateBaseState: '@Base/updateBaseState'
};
