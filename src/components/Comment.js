// External Dependencies
import React from 'react';
// Styles
import '../styles/TodoComment.css';

const TodoComment = ({ listItem = {} }) => {
  const isCompleted = listItem.completed;
  return (
    <div className="TodoItem">
      <div className="TodoItem-Item">
        <CompleteButton item={listItem} />
        <h1 className={`TodoItem-Content ${isCompleted ? 'completed' : null}`}>
          {listItem.content}
        </h1>
        <DeleteButton item={listItem} />
      </div>
      <div className="TodoItem-Comments">
        <div className="TodoItem-Comment">
          <p>Comment 1</p>
        </div>
        <div className="TodoItem-Comment">
          <p>Comment 2</p>
        </div>
        <div className="TodoItem-Comment">
          <p>Comment 3</p>
        </div>
        <div className="TodoItem-Comment">
          <p>Comment 4</p>
        </div>
        <div className="TodoItem-Comments-Form">
          {/* add a form to add comments */}
        </div>
      </div>
    </div>
  );
};

export default TodoComment;
