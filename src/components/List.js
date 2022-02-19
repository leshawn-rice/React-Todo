// External Dependencies
import React from 'react';
import { useSelector } from 'react-redux';
// Components
import ListItem from './ListItem';
// Styles
import '../styles/List.css';

const List = () => {
  const sortList = (a, b) => {
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
  };

  const todoList = useSelector((state) => state.todoList);
  todoList.sort(sortList);

  return (
    <div className="List">
      {todoList.map((listItem) => (
        <ListItem key={listItem.id} listItem={listItem} />
      ))}
    </div>
  );
};

export default List;
