import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from "@testing-library/react";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("checks to see if the text is in the document", () => {
  const { getByText } = render(<App />)
  expect(getByText('Hello!')).toBeInTheDocument;
})

it("checks to see if the test id is in the document", () => {
  const { getByTestId } = render(<App />)
  expect(getByTestId('header')).toBeInTheDocument;
})

it("checks to see if the text is in the document", () => {
  const { getByText } = render(<App />)
  expect(getByText('Search the list of players:')).toBeInTheDocument;
})

it("checks placeholder text", () => {
  const { getByPlaceholderText } = render(<App />)
  expect(getByPlaceholderText('Search me!')).toBeInTheDocument;
})


const setup = () => {
  const utils = render(<App />)
  const input = utils.getByPlaceholderText('Search me!')
  return {
    input,
    ...utils,
  }
}


it('It should not allow letters to be inputted', () => {
  const { input } = setup()
  expect(input.value).toBe('') // empty before
  fireEvent.change(input, { target: { value: 'Good Day' } })
  expect(input.value).toBe('') //empty after
})