import React from "react";
import PropTypes from "prop-types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { postedAt } from "../utils/index";

function ThreadCommentItem({
  id,
  owner,
  createdAt,
  content,
  upVotesBy,
  upVote,
  authUser,
}) {
  const isUpVoted = upVotesBy.includes(authUser);

  const onUpVoteComment = (event) => {
    event.stopPropagation();
    upVote(id);
  };

  return (
    <>
      <div className="comment-item">
        <header>
          <div className="comment-item__header">
            <div className="comment-item__owner-info">
              <img src={owner.avatar} alt={owner.name} />
              <p>{owner.name}</p>
            </div>
            <p className="posted-at">{postedAt(createdAt)}</p>
          </div>
        </header>
        <p className="comment-item__content">{content}</p>
        <div className="comment-item__footer">
          {upVote && (
            <div className="comment-item__upvotes">
              <p>
                <button type="button" onClick={onUpVoteComment}>
                  {isUpVoted ? (
                    <AiFillHeart style={{ color: "red" }} />
                  ) : (
                    <AiOutlineHeart />
                  )}
                </button>
                {upVotesBy.length}
              </p>
            </div>
          )}
        </div>
      </div>
      <hr />
    </>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const commentItemShape = {
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  content: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

ThreadCommentItem.propTypes = {
  ...commentItemShape,
};

ThreadCommentItem.defaultProps = {
  downVote: null,
};

export { commentItemShape };

export default ThreadCommentItem;
