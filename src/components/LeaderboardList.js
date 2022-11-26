import React from 'react';
import PropTypes from 'prop-types';
import LeaderboardItem, { leaderboardItemShape } from './LeaderboardItem';

function LeaderboardList({ leaderboards }) {
  return (
    <div className="leaderboards-list">
      <header>
        <p className="leaderboards-list__user-label">Users</p>
        <p className="leaderboars-list__score-label">Score</p>
      </header>
      <div className="leaderboards-list__item">
        {
          leaderboards.map((leaderboard) => (
            <LeaderboardItem key={leaderboard.id} {...leaderboard} />
          ))
        }
      </div>
    </div>
  );
}

LeaderboardList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardItemShape)).isRequired,
};

export default LeaderboardList;
