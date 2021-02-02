import { AnyAction } from 'redux';
import actions from '../creators/actions';

export default {
  reducer(
    state: ApplicationState = ({} as unknown) as ApplicationState,
    action: AnyAction
  ): ApplicationState {
    let newState = Object.assign({}, state);

    switch (action.type) {
      case actions.INITIALIZE:
        newState.dispatchedData = action.data;
        break;
      default:
        newState = state;
    }

    return newState;
  },
};

export interface ApplicationState {
  defaultData: string;
  dispatchedData: string;
}
