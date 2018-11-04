import React from 'react';
import ReactDOM from 'react-dom';
import TodoListTemplate from '../TodoListTemplate';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoListTemplate />, div);
  ReactDOM.unmountComponentAtNode(div);
});
