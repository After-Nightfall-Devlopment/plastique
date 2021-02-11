import actions from './actions';
import { AnyAction } from 'redux';

export const save = (username: string): AnyAction => {
  return {
    type: actions.SAVE,
    username,
  };
};
