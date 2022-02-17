// External Dependencies
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Internal Dependencies
import { addItem, removeItem, updateItem, clearList } from '../redux/actionCreators';
// Components
import TodoItem from './TodoItem';


const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(state => state.todoList);

  useEffect(() => {
    dispatch(clearList())
    dispatch(addItem({id: 1, name: "Leshawn"}));
  }, []);

  return (
    <div className="TodoList">
      {todoList.map((listItem) => (
        <TodoItem key={listItem.id} listItem={listItem} />
      ))}
    </div>
  )
}

export default TodoList;
