import { initialize } from './initialize';
import actions from './actions';

describe('Initialize Creator', () => {
  it('should return action', () => {
    const action = initialize('TEST_DATA');

    expect(action).toEqual({
      type: actions.INITIALIZE,
      data: 'TEST_DATA',
    });
  });
});
