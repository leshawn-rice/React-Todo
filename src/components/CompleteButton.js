// External Dependencies
import React from 'react';
import { useDispatch } from 'react-redux';
// Internal Dependencies
import { updateItem } from '../redux/actionCreators';
// Components
import Button from './Button';
// Styles
import '../styles/CompleteButton.css';

const CompleteButton = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    let completed = item.completed === true ? false : true;
    dispatch(updateItem({ ...item, completed }));
  };

  return (
    <Button
      handleClick={handleClick}
      classes="CompleteButton"
      text="Complete"
    />
  );
};

export default CompleteButton;
