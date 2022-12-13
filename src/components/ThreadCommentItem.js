import React from 'react';
import PropTypes from 'prop-types';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { postedAt } from '../utils/index';

function ThreadCommentItem({ id, owner, createdAt, content, upVotesBy,
  downVotesBy, upVote, downVote, authUser,
}) {
  const isUpVoted = upVotesBy.includes(authUser.id);
  const isDownVoted = downVotesBy.includes(authUser.id);

  const onUpVoteComment = (event) => {
    event.stopPropagation();
    upVote(id);
  };

  const onDownVoteComment = (event) => {
    event.stopPropagation();
    downVote(id);
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
          {
            upVote && (
              <div className="comment-item__upvotes">
                <p>
                  <button type="button" onClick={onUpVoteComment}>
                    { isUpVoted ? <AiFillLike style={{ color: '#46459E' }} /> : <AiFillLike /> }
                  </button>
                  {upVotesBy.length}
                </p>
              </div>
            )
          }
          {
            downVote && (
              <div className="comment-item__downvotes">
                <p>
                  <button type="button" onClick={onDownVoteComment}>
                    { isDownVoted ? <AiFillDislike style={{ color: 'red' }} /> : <AiFillDislike /> }
                  </button>
                  {downVotesBy.length}
                </p>
              </div>
            )
          }
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
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  content: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

ThreadCommentItem.propTypes = {
  ...commentItemShape,
};

ThreadCommentItem.defaultProps = {
  upVote: null,
  downVote: null,
};

export { commentItemShape };

export default ThreadCommentItem;
