import React from 'react';
import PropTypes from 'prop-types';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { postedAt } from '../utils';

function ThreadDetail({ id, authUser, title, createdAt, body, owner, category,
  upVotesBy, downVotesBy, upVoteThread, downVoteThread,
}) {
  const isUpVoted = upVotesBy.includes(authUser);
  const isDownVoted = downVotesBy.includes(authUser);

  return (
    <section className="thread-detail">
      <div className="thread-detail__title">
        <h3>{title}</h3>
      </div>
      <div className="thread-detail-item">
        <header>
          <div className="thread-detail__header-left">
            <div className="thread-detail__owner-avatar">
              <img src={owner.avatar} alt={owner.name} />
            </div>
            <div className="thread-detail__owner-info">
              <p className="thread-detail__owner-name">{owner.name}</p>
              <p className="thread-detail__created-at">{postedAt(createdAt)}</p>
            </div>
          </div>
          <div className="thread-detail__header-right">
            <p className="thread-detail__category">
              #
              {category}
            </p>
          </div>
        </header>
        <article>
          <p className="thread-detail__body" dangerouslySetInnerHTML={{ __html: body }} />
        </article>
        <div className="thread-detail__footer">
          <div className="thread-detail__upvotes-thread">
            <p>
              <button type="button" onClick={() => upVoteThread(id)}>
                { isUpVoted ? <AiFillLike style={{ color: '#46459E' }} /> : <AiFillLike /> }
              </button>
              {upVotesBy.length}
            </p>
          </div>
          <div className="thread-detail__downvotes-thread">
            <p>
              <button type="button" onClick={() => downVoteThread(id)}>
                { isDownVoted ? <AiFillDislike style={{ color: 'red' }} /> : <AiFillDislike /> }
              </button>
              {downVotesBy.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVoteThread: PropTypes.func.isRequired,
  downVoteThread: PropTypes.func.isRequired,
};

export default ThreadDetail;
