import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadComment({ addComment }) {
  const [content, setContent] = useState('');

  const onAddComment = () => {
    addComment(content);
    setContent('');
  };

  const handleAddComment = (event) => {
    setContent(event.target.innerText);
  };

  return (
    <>
      <h3>New comment :</h3>
      <form className="comment-input">
        <div className="comment-input__field" data-placeholder="Create new comment..." contentEditable data-value={content} onInput={handleAddComment} />
        <button type="submit" onClick={onAddComment}>+</button>
      </form>
    </>
  );
}

ThreadComment.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default ThreadComment;
