import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Form from './component/form/Form';

test('render header message', () => {
  const { getByText } = render(<App />);
  const header = getByText(/Consult your commits messages/i);
  expect(header).toBeInTheDocument();
});


testForm('test form',()=>{
  const form=shallow(<Form{}/>);
  expect(form.instance().getCommitsMessage()).equals(true);
});
