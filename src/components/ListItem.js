// External Dependencies
import React from 'react';
// Internal Dependencies

//Components
import DeleteButton from './DeleteButton';
import CompleteButton from './CompleteButton';
// Styles
import '../styles/ListItem.css';

const ListItem = ({ listItem = {} }) => {
  const isCompleted = listItem.completed;
  return (
    <div className="ListItem">
      <div className="ListItem-Item">
        <CompleteButton item={listItem} />
        <h1 className={`ListItem-Content ${isCompleted ? 'completed' : null}`}>
          {listItem.content}
        </h1>
        <DeleteButton item={listItem} />
      </div>
      <div className="ListItem-Comments">
        <div className="ListItem-Comment">
          <p>Comment 1</p>
        </div>
        <div className="ListItem-Comment">
          <p>Comment 2</p>
        </div>
        <div className="ListItem-Comment">
          <p>Comment 3</p>
        </div>
        <div className="ListItem-Comment">
          <p>Comment 4</p>
        </div>
        <div className="ListItem-Comments-Form">
          {/* add a form to add comments */}
        </div>
      </div>
    </div>
  );
};

export default ListItem;
