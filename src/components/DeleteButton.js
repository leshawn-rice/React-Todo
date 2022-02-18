// External Dependencies
import React from 'react';
import { useDispatch } from 'react-redux';
// Internal Dependencies
import { removeItem } from '../redux/actionCreators';
// Components
import Button from './Button';
// Styles
import '../styles/CompleteButton.css';

const DeleteButton = ({itemId}) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeItem({id: itemId}))
  }

  return (
    <Button handleClick={handleClick} classes="DeleteButton" text="Delete" />
  )
}

export default DeleteButton;

