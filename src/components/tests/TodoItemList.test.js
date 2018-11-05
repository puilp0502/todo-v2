import React from 'react';
import ReactDOM from 'react-dom';
import TodoItemList from '../TodoItemList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoItemList />, div);
  ReactDOM.unmountComponentAtNode(div);
});