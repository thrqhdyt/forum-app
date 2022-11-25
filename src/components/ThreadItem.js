import React from 'react';
import PropTypes from 'prop-types';
import { AiFillLike, AiFillDislike, AiOutlineComment } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { postedAt } from '../utils/index';

function ThreadItem({
  id, title, body, createdAt, category, upVotesBy, downVotesBy, totalComments,
  authUser, upVote, downVote, user,
}) {
  const isUpVoted = upVotesBy.includes(authUser);
  const isDownVoted = downVotesBy.includes(authUser);

  const onUpVoteThread = (event) => {
    event.stopPropagation();
    upVote(id);
  };

  const onDownVoteThread = (event) => {
    event.stopPropagation();
    downVote(id);
  };

  return (
    <div className="thread-item">
      <div className="thread-item__title">
        <Link to={`/threads/${id}`} style={{ textDecoration: 'none' }}>
          <h3>{title}</h3>
        </Link>
      </div>
      <div className="thread-item__detail">
        <header>
          <div className="thread-item__header-left">
            <div className="thread-item__user-avatar">
              <img src={user.avatar} alt={user.name} />
            </div>
            <div className="thread-item__user-info">
              <p className="thread-item__user-name">{user.name}</p>
              <p className="thread-item__created-at">{postedAt(createdAt)}</p>
            </div>
          </div>
          <div className="thread-item__header-right">
            <p className="thread-item__category">
              #
              {category}
            </p>
          </div>
        </header>
        <article>
          <p className="thread-item__body" dangerouslySetInnerHTML={{ __html: `${body.substring(0, 200)}.....` }} />
        </article>
        <hr />
        <div className="thread-item__footer">
          {
            upVote && (
              <div className="thread-item__upvotes-thread">
                <p>
                  <button type="button" onClick={onUpVoteThread}>
                    { isUpVoted ? <AiFillLike style={{ color: '#46459E' }} /> : <AiFillLike /> }
                  </button>
                  {upVotesBy.length}
                </p>
              </div>
            )
          }

          {
            downVote && (
              <div className="thread-item__downvotes-thread">
                <p>
                  <button type="button" onClick={onDownVoteThread}>
                    { isDownVoted ? <AiFillDislike style={{ color: 'red' }} /> : <AiFillDislike /> }
                  </button>
                  {downVotesBy.length}
                </p>
              </div>
            )
          }

          <p className="thread-item__total-comments">
            <AiOutlineComment />
            {' '}
            {totalComments}
          </p>
        </div>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  category: PropTypes.string,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  authUser: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
};

ThreadItem.defaultProps = {
  upVote: null,
  downVote: null,
};

export { threadItemShape };

export default ThreadItem;
