// External Dependencies
import React from 'react';
// Internal Dependencies
// Components
import Button from './Button';
// Styles
import '../styles/CompleteButton.css';

const CompleteButton = ({itemId}) => {

  const handleClick = () => {
      console.log("complete");
  }

  return (
    <Button handleClick={handleClick} classes="CompleteButton" text="Complete" />
  )
}

export default CompleteButton;
