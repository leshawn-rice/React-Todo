import React from 'react';

const TodoItem = ({ listItem={} }) => {
  return (
    <div className="TodoItem">
        <h1>{listItem.id}</h1>
    </div>
  )
}

export default TodoItem;
