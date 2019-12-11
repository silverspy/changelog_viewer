import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('render header message', () => {
  const { getByText } = render(<App />);
  const header = getByText(/Consult your commits messages/i);
  expect(header).toBeInTheDocument();
});
