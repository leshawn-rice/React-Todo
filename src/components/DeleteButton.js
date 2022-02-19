// External Dependencies
import React from 'react';
import { useDispatch } from 'react-redux';
// Internal Dependencies
import { removeItem } from '../redux/actionCreators';
// Components
import Button from './Button';
// Styles
import '../styles/CompleteButton.css';

const DeleteButton = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeItem({ id: item.id }));
  };

  return (
    <Button handleClick={handleClick} classes="DeleteButton" text="Delete" />
  );
};

export default DeleteButton;
