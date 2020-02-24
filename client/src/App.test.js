import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('checks for the name Marta', () => {
  const { getByText } = render(<App/>);
  expect(getByText('Marta')).toBeInTheDocument();
});