import { useSelector } from 'react-redux';
import { StoreState } from '../../store';
import { BaseState } from '../../base';

export const useBaseState = (): BaseState => {
  return useSelector((state: StoreState) => state.base);
};
