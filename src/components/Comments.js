// External Dependencies
import React from 'react';
//Components
import Comment from './Comment';
// Styles
import '../styles/Comments.css';

const Comments = ({ comments = [] }) => {
  return (
    <div className="Comments">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
      <div className="Comments-Form">{/* add a form to add comments */}</div>
    </div>
  );
};

export default Comments;
