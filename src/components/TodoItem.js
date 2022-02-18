// External Dependencies
import React from 'react';
// Internal Dependencies

//Components
import DeleteButton from './DeleteButton';
import CompleteButton from './CompleteButton';
// Styles
import '../styles/TodoItem.css';

const TodoItem = ({ listItem = {} }) => {
  return (
    <div className="TodoItem">
      <CompleteButton itemId={listItem.id} />
      <h1>{listItem.content}</h1>
      <DeleteButton itemId={listItem.id} />
    </div>
  );
};

export default TodoItem;
