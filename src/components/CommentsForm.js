// External Dependencies
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// Internal Dependencies
import { addItem } from '../redux/actionCreators';
// Styles
import '../styles/CommentsForm.css';

const CommentsForm = () => {
  const INITIAL_DATA = {
    content: '',
  };

  const [formData, setFormData] = useState(INITIAL_DATA);
  const dispatch = useDispatch();

  const resetForm = () => {
    setFormData(INITIAL_DATA);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const todoItem = {};
    todoItem.content = formData.content;
    todoItem.id = uuidv4();
    todoItem.comments = [];
    dispatch(addItem(todoItem));
    resetForm();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  return (
    <div className="CommentsForm">
      <form onSubmit={handleSubmit}>
        <label className="TodoForm-Label" htmlFor="content">
          Add List Item
        </label>
        <input
          className="CommentsForm-Input"
          type="text"
          name="content"
          id="content"
          autoFocus={true}
          onChange={handleChange}
          value={formData.content}
        />
        <button className="CommentsForm-Btn">Add!</button>
      </form>
    </div>
  );
};

export default CommentsForm;
