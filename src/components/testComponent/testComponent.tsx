import { AppRoot } from '@reactjs-webinar/general';
import { Company, Language, Platform } from '@reactjs-webinar/general/dist/$types';
import { configureStore } from '@store';
import React from 'react';
import { Provider } from 'react-redux';

const store = configureStore();

export const TestComponent: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <AppRoot company={Company.company1} language={Language.pt} platform={Platform.mobile}>
        {children}
      </AppRoot>
    </Provider>
  );
};
