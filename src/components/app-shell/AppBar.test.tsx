import React from 'react';
import AppBar from './AppBar';
import { getStore, renderWithRedux } from '../../configs/test-setup/mock-redux';

describe('AppBar Component', () => {
  it('should render with redux', () => {
    const dispatchedData = chance.string();

    const appBar = renderWithRedux(
      <AppBar />,
      getStore(
        {
          dispatchedData: dispatchedData,
        },
        null
      )
    );

    expect(appBar.getByText('TESTING_DEFAULT')).toBeInTheDocument();
    expect(appBar.getByText(dispatchedData)).toBeInTheDocument();
  });
});
