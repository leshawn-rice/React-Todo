// External Dependencies
import React from 'react';
// Internal Dependencies

// Styles
import '../styles/TodoItem.css';

const TodoItem = ({ listItem = {} }) => {
  return (
    <div className="TodoItem">
      <h1>{listItem.content}</h1>
    </div>
  );
};

export default TodoItem;
