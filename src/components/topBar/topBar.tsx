/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Block } from '@reactjs-webinar/general';
import { Company } from '@reactjs-webinar/general/dist/types';

import { useBaseState, updateBaseState } from '@store';

export const TopBar: React.FC = () => {
  const baseState = useBaseState();
  const { company } = baseState;
  const dispatch = useDispatch();

  const handleOnChangeCompany = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(updateBaseState({ ...baseState, company: event.target.value as Company }));
    },
    [baseState, dispatch]
  );

  return (
    <Block
      style={{
        top: '0',
        height: '50px',
        width: '100%',
        padding: '10px',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
      <Block>Todo App</Block>
      <Block>
        <select onChange={handleOnChangeCompany} value={company}>
          <option value={Company.company1}>Company 1</option>
          <option value={Company.company2}>Company 2</option>
        </select>
      </Block>
    </Block>
  );
};
