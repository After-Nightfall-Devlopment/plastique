import actions from './actions';
import { AnyAction } from 'redux';

export const initialize = (data: string): AnyAction => {
  return {
    type: actions.INITIALIZE,
    data: data,
  };
};
