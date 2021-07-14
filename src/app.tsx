import React from 'react';
import { AppRoot, Block } from '@reactjs-webinar/general';
import { Theme } from '@reactjs-webinar/theme';
import { company1Theme, company2Theme } from '@reactjs-webinar/theme/dist/consts';
import { TopBar } from '@components';
import { Todos } from '@screens';
import { useBaseState } from '@store';
import { Company, Platform } from '@reactjs-webinar/general/dist/$types';

export const App: React.FC = () => {
  const { company, language } = useBaseState();
  const platform = React.useRef(window.innerWidth < 720 ? Platform.mobile : Platform.desktop);

  const padding = `${0.05 * window.innerWidth}px`;

  return (
    <AppRoot company={company} language={language} platform={platform.current}>
      <Theme theme={company === Company.company1 ? company1Theme : company2Theme}>
        <Block style={{ width: '100vw', minHeight: '100vh' }}>
          <TopBar />
          <Block
            style={{
              padding,
              justifyContent: 'center'
            }}>
            <Todos />
          </Block>
        </Block>
      </Theme>
    </AppRoot>
  );
};
