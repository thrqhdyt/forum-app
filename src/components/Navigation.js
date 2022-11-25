import React from 'react';
import PropTypes from 'prop-types';
import { BsFillChatQuoteFill } from 'react-icons/bs';
import { MdLeaderboard } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Navigation({ authUser, signOut }) {
  const { id, name, avatar } = authUser;

  return (
    <div className="navigation">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h2>Forum App</h2>
      </Link>
      <nav>
        <Link className="nav-link" to="/">
          Thread
          {' '}
          <BsFillChatQuoteFill />
        </Link>
        <Link className="nav-link" to="/leaderboard">
          Leaderboard
          {' '}
          <MdLeaderboard />
        </Link>
      </nav>
      <div className="nav__user-info">
        <img src={avatar} alt={id} title={name} />
        <button type="button" onClick={signOut}>Logout</button>
      </div>
    </div>
  );
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
