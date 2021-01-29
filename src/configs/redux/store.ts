import {
  Store,
  combineReducers,
  applyMiddleware,
  createStore as originalCreateStore,
} from 'redux';
import { History } from 'history';
import thunkMiddleware from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import application, { ApplicationState } from '../../reducers/application';

export const createStore = (history: History): Store => {
  const createStoreFunc = applyMiddleware(
      thunkMiddleware,
      routerMiddleware(history)
    )(originalCreateStore),
    allReducers = combineReducers({
      routing: routerReducer,
      router: connectRouter(history),
      applicationState: application.reducer,
    });

  return createStoreFunc(allReducers, {
    applicationState: ({
      defaultData: 'DEFAULTING_FROM_STORE',
    } as unknown) as ApplicationState,
  });
};

export interface State {
  applicationState: ApplicationState;
}
