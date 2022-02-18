// External Dependencies
import React from 'react';
// Styles
import '../styles/Button.css';

const Button = ({handleClick, classes, text}) => {

  return (
    <button onClick={handleClick} className={`Button ${classes}`}>{text}</button>
  )

}

export default Button;
