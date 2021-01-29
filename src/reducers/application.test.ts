import application, { ApplicationState } from './application';
import actions from '../creators/actions';

describe('Application Reducer', () => {
  it('should hit default block', () => {
    const state = application.reducer(undefined, {
      type: chance.string(),
    });

    expect({}).toStrictEqual(state);
  });

  it('should return data', () => {
    const data = chance.string();

    const state = application.reducer(undefined, {
      type: actions.INITIALIZE,
      data: data,
    });

    expect(data).toEqual(state.dispatchedData);
  });

  it('should return existing state', () => {
    const defaultData = chance.string();
    const dispatchedData = chance.string();

    const state = application.reducer(
      ({
        defaultData: defaultData,
      } as unknown) as ApplicationState,
      {
        type: actions.INITIALIZE,
        data: dispatchedData,
      }
    );

    expect({
      defaultData: defaultData,
      dispatchedData: dispatchedData,
    }).toEqual(state);
  });
});
