// External Dependencies
import React from 'react';
// Components
import TodoForm from './TodoForm';
import TodoList from './TodoList';
// Styles
import '../styles/App.css';

const App = () => {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
