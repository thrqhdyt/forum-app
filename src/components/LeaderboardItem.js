import React from 'react';
import PropTypes from 'prop-types';
import LeaderboardItemStyle from '../styled/LeaderboardItemStyle';

function LeaderboardItem({ user, score }) {
  return (
    <LeaderboardItemStyle>
      <div className="leaderboard-item__user-info">
        <img src={user.avatar} alt={user.name} />
        <p>{user.name}</p>
      </div>
      <p className="leaderboard-item__score">{score}</p>
    </LeaderboardItemStyle>
  );
}

const userShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const leaderboardItemShape = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};

LeaderboardItem.propTypes = {
  ...leaderboardItemShape,
};

export { leaderboardItemShape };

export default LeaderboardItem;
