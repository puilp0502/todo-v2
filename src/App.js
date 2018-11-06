import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import PriorityPicker from './components/PriorityPicker';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 3

  state = {
    input: '',
    urgency: 2,
    todos: [
      { id: 0, text: '리액트 소개', checked: false, urgency: 1 },
      { id: 1, text: '리액트 소개', checked: true, urgency: 3 },
      { id: 2, text: '리액트 소개', checked: false, urgency: 2 },
    ]
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }
  handleUrgencyChange = urgency => {
    this.setState({ urgency });
  }
  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    })
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({todos: nextTodos});
  }

  handleRemove = (id) => {
    this.setState({todos: this.state.todos.filter(todo => todo.id !== id)})
  }
  render() {
    const { input, urgency, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleUrgencyChange,
    } = this;

    return (
      <div>
        <TodoListTemplate form={(
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}/>)} 
          priorityPicker={(<PriorityPicker urgency={urgency} onUrgencyChange={handleUrgencyChange} />)}>
          <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;
