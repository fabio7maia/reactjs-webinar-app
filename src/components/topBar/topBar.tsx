/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Block, InputDropdown } from '@reactjs-webinar/general';
import { useTheme } from '@reactjs-webinar/theme/dist/hooks';
import { Company } from '@reactjs-webinar/general/dist/types';
import { useBaseState, updateBaseState } from '@store';

export const TopBar: React.FC = () => {
  const baseState = useBaseState();
  const { company } = baseState;
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleOnChangeCompany = React.useCallback(
    (company?: string) => {
      dispatch(updateBaseState({ ...baseState, company: company as Company }));
    },
    [baseState, dispatch]
  );

  return (
    <Block
      style={{
        top: '0',
        height: '75px',
        width: '100%',
        padding: '10px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.primary
      }}>
      <Block
        style={{
          justifyContent: 'center',
          color: '#fff',
          fontWeight: 700
        }}>
        Todo App
      </Block>
      <Block
        style={{
          justifyContent: 'center'
        }}>
        <InputDropdown
          label="Company"
          name="company"
          value={company}
          onChange={handleOnChangeCompany}
          items={[
            { label: 'IT Sector', value: 'company1' },
            { label: 'eBankit', value: 'company2' }
          ]}
          style={{ width: '200px' }}
        />
        {/* <select onChange={handleOnChangeCompany} value={company}>
          <option value={Company.company1}>Company 1</option>
          <option value={Company.company2}>Company 2</option>
        </select> */}
      </Block>
    </Block>
  );
};
