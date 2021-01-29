import application from './application';
import actions from '../creators/actions';

describe('Application Reducer', () => {
  it('should hit default block', () => {
    const state = application.reducer(undefined, {
      type: 'DEFAULT',
    });

    expect(state).toStrictEqual({});
  });

  it('should return data', () => {
    const state = application.reducer(undefined, {
      type: actions.INITIALIZE,
      data: 'data',
    });

    expect(state.dispatchedData).toEqual('data');
  });
});
