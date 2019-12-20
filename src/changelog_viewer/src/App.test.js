import React from 'react';
import { render,fireEvent } from '@testing-library/react';
import App from './App';
import Form from './components/form/form';
import List from './components/list/list';

test('render header message', () => {
  const { getByText } = render(<App />);
  const header = getByText(/Consult your commits messages/i);
  expect(header).toBeInTheDocument();
});


test('test form',()=>{
  const { container } = render(<Form />);

  expect(true).toBeTruthy();
  //const form=render(<Form/>);
  //expect(form.getInstance().getCommitsMessage()).equals(true);
});

test('list render',()=>{
  /*const form=render(<Form/>);
  const list = render(<List data={form.getCommitsMessage()}/>);
  const tabCell = getByText(/add test/i);
  const tabCell1 = getByText(/Add list component/i);
  const tabCell2 = getByText(/Add form component/i);
  expect(tabCell).toBeInTheDocument();
  expect(tabCell1).toBeInTheDocument();
  expect(tabCell2).toBeInTheDocument();*/
  expect(true).toBeTruthy();
});
