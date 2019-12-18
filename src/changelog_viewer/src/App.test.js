import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Form from './component/form/Form';
import List from './component/list/List';

test('render header message', () => {
  const { getByText } = render(<App />);
  const header = getByText(/Consult your commits messages/i);
  expect(header).toBeInTheDocument();
});


test('test form',()=>{
  const form=shallow(<Form{}/>);
  expect(form.instance().getCommitsMessage()).equals(true);
});

test('list render',()=>{
  const list = render(<List data={form.instance().getCommitsMessage()}/>);
  const tabCell = getByText(/add test/i);
  const tabCell1 = getByText(/Add list component/i);
  const tabCell2 = getByText(/Add form component/i);
  expect(tabCell).toBeInTheDocument();
  expect(tabCell1).toBeInTheDocument();
  expect(tabCell2).toBeInTheDocument();
});
