import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeaderboardList from '../components/LeaderboardList';
import { asyncGetLeaderboards } from '../states/leaderboard/action';

function LeaderboardPage() {
  const { leaderboards = [], users = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetLeaderboards());
  }, [dispatch]);

  const leaderboardsList = leaderboards.map((leaderboard) => ({
    ...leaderboard,
    users: users.find((user) => user.id === users.id),
  }));

  return (
    <div className="board-page">
      <h2>Standings active user</h2>
      <LeaderboardList leaderboards={leaderboardsList} />
    </div>
  );
}

export default LeaderboardPage;
