import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TodoItem from '../TodoItem';
import styles from '../TodoItem.module.css';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("doesn't crash when remove is clicked", () => {
  const todoitem = shallow(<TodoItem/>);
  todoitem.find("."+styles.remove).simulate('click', { stopPropagation() {} });
})