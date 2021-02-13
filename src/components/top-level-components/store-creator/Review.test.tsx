import React from 'react';
import Review from './Review';
import { fireEvent } from '@testing-library/react';
import {
  getStore,
  renderWithRedux,
} from '../../../configs/test-setup/mock-redux';
import creatorActions from '../../../creators/actions';

describe('Review Component', () => {
  it('should have textfield and submit button', () => {
    const store = getStore({}, null);
    const reviewCard = renderWithRedux(<Review />, store);

    const saveButton = reviewCard.getByTestId('save-button');
    expect(saveButton).toBeInTheDocument();
    const textField = reviewCard.getByTestId('username-textfield');

    // expect(reviewCard.getByLabelText('Username')).toBeInTheDocument();
    expect(textField).toBeInTheDocument();
    const actualTextInput = textField.getElementsByTagName('input')[0];
    fireEvent.change(actualTextInput, {
      target: { value: '23' },
    });
    expect(actualTextInput.value).toBe('23');

    saveButton.click();

    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toStrictEqual({
      username: '23',
      type: creatorActions.SAVE,
    });
  });
});
