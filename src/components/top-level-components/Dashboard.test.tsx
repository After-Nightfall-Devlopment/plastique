import React from 'react';
import Dashboard from './Dashboard';
import { render } from '@testing-library/react';

describe('Dashboard Component', () => {
  it('should render with text', () => {
    const dashboard = render(<Dashboard />);

    expect(dashboard.getByText('Dashboard')).toBeInTheDocument();
  });
});
