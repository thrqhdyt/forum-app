/* eslint-disable max-len */
import React from "react";
import PropTypes from "prop-types";
import ThreadCommentItem, { commentItemShape } from "./ThreadCommentItem";

function ListComment({ comments, upVote }) {
  return (
    <div className="comment-list">
      <h3>Comment ({comments.length})</h3>
      {comments.map((comment) => (
        <ThreadCommentItem key={comment.id} {...comment} upVote={upVote} />
      ))}
    </div>
  );
}

ListComment.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
};

export default ListComment;
